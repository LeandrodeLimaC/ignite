/**
 * ** Streams ** 
 * Uma abertura de conexão, de forma que possa ser enviada pedaços
 * de informações aos poucos
 * 
 * - Todas as portas de entradas e saidas do node são automaticamente
 *   streams
 * - Pedaços (Chunks) nunca poderão estar em tipos 
 *   primitivos, apenas em Buffers
 * - Existe um tipo `Duplex` que pode ter tanto o 
 *   metodo de leitura quando de escrita
 */

import { Readable, Writable, Transform } from 'node:stream'

/**
 * ** Stream de leitura **
 * Tem como proposito, enviar dados e fornecer informações
 * IMPORTANTE: Metodo obrigatório _read()
 * ex .: stdin,
 */

class OneToHundred extends Readable {
  index = 1

  _read(){
    const i = this.index++

    setTimeout(() => {
      if(this.index > 100){
        this.push(null)
      } else {
        const buffer = Buffer.from(String(i))
  
        this.push(buffer)
      }
    }, 1000)
  }
}

/***
 * ** Stream de transformação **
 * Obrigatóriamente precisa ler dados de um lugar
 * e escrever dados para outro lugar
 * ela é uma stream utilizada no intermeio, para comunicação
 * de outras duas streams
 * IMPORTANTE: Sempre utilizar para processar dados
 */

class InverseNumberStream extends Transform {
  _transform(buffer, encode, callback) {
    const result = Number(buffer.toString()) * -1

    /**
     * Recebe 2 parametros
     * - Erro
     * - Resultado
     */
    callback(null, Buffer.from(String(result)))
  }
}

/**
 * ** Stream de escrita **
 * É responsavel por receber dados de uma stream de leitura e 
 * posteriormente realizar alguma ação com estes dados
 * IMPORTANTE: NUNCA transforma dados, apenas os processa!
 * IMPORTANTE: NUNCA retorna nada!
 * ex .: stdout
 */

class MultiplyByTenStream extends Writable {
  _write(buffer, encode, callback){
    console.log(Number(buffer.toString()) * 10)

    callback()
  }
}

new OneToHundred()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
