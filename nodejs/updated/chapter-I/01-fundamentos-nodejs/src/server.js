import http from 'node:http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'

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

const database = new Database()

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' & url === '/users') {
    const users = database.select('users')
    
    return res.end(JSON.stringify(users))
  }

  if (method === 'POST' & url === '/users') {
    const { name, email } = req.body
    
    const user = {
      id: "1",
      name,
      email
    }

    database.insert('users', user)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)