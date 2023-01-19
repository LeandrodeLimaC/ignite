import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' & url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' & url === '/users') {
    users.push({
      name: "John Doe",
      email: "john@example.com"
    })

    return res.end('Criação de usuário')
  }

  return res.end('Hello world!')
})

server.listen(3333)