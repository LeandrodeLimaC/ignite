import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

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

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path === url
  })

  if(route) {
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)