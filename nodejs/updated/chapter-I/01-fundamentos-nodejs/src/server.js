import http from 'node:http'

// - Criar usuários 
// - Listar usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET => Buscar um recurso
// POST => Criar um recurso
// PUT => Atualizar um recurso
// PATCH => Atualizar uma informação específica de um recurso
// DELETE => Deletar um recurso

// GET /users => Buscar usuários
// POST /users => Criar usuário

// Stateful vs Stateless
//  - Stateful diz respeito a aplicação manter os dados em memória
//    de modo que, caso a aplicação seja reiniciada, ela se 
//    comportará de modo diferente
//  
//  - Stateless, o estado é persistido e mantido em um ambiente externo
//   

// Cabeçalhos (Requisição/Resposta) => Metadados



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
      id: "1",
      name: "John Doe",
      email: "john@example.com"
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)