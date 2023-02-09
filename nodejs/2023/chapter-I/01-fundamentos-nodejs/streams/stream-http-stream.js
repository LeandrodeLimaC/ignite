import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(buffer, encode, callback) {
    const result = Number(buffer.toString()) * -1

    console.log(result)
    /**
     * Recebe 2 parametros
     * - Erro
     * - Resultado
     */
    callback(null, Buffer.from(String(result)))
  }
}

const httpServer = http.createServer(async (req, res) => {
  const buffers = []

  for await(const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)

  // return req
  //     .pipe(new InverseNumberStream())
  //     .pipe(res)
  // }
})

httpServer.listen(3334)


