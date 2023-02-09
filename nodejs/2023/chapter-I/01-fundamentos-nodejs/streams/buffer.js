// Representação de um espaço na memoria do computador

// Dados armazenados no buffers são dados "temporarios",
// criados para serem utilizados rapidamente e depois removidos

/*
  - Buffer guarda os dados de forma binária
*/ 

const buf = Buffer.from("hello")
// Hexadecimal -> <Buffer 68 65 6c 6c 6f>
console.log(buf) 


// Decimal -> { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }
console.log(buf.toJSON()) 
