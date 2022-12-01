const express = require('express')
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json())
const customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - 
 */

app.post('/account', (request, response) => {
  const {cpf, name} = request.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf 
  )

  if(customerAlreadyExists) {
    return response.status(400).json({error: "Customer already exists!"})
  }

  const id = uuidv4();

  customers.push({
    id,
    cpf,
    name,
    statement: []
  })

  return response.status(201).send()
})

app.get('/statement/:cpf', (request, response) => {
  const { cpf } = request.params

  const customerFound = customers.find((customer) => customer.cpf === cpf)

  if(!customerFound){
    return response.status(404).json({error: "Customer not found"})
  }


  return response.json(customerFound.statement)
})

app.listen(3333)