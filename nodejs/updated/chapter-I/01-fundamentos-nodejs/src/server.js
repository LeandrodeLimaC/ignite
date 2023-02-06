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


/*
  Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
  http://localhost:333/users?userId=1&name=Diego

  Route Parameters: Identificção de recurso
  GET http://localhost:3333/users/1
  DELETE http://localhost:3333/users/1

  Request Body: Envio de informações de um formulário (HTTPs)
  POST http://localhost:3333/users/1
*/


const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(route) {
    const routeParams = req.url.match(route.path)

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)