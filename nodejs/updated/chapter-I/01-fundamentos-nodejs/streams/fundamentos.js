// Todas as entradas e saidas do node são streams

// Streams -> 
//   Pedaços nunca poderão estar em tipos primitivos e sim em Buffers
//   Buffer.from()

/* 
// Readable stream
process.stdin
  // Writable stream
  .pipe(proccess.stdout) 
*/

import { stdout } from 'node:process'
import { Readable } from 'node:stream'

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

new OneToHundred()
  .pipe(stdout)
  