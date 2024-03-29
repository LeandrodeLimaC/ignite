const { response, request } = require('express');
const express = require('express')
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json())
const customers = [];

// Utils
function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === "credit") {
      return acc + operation.amount 
    } else {
      return acc - operation.amount 
    }
  }, 0)

  return balance
}

// Middlewares
function verifyIfExistsAccountWithCPF(request, response, next) {
  const { cpf } = request.headers

  const customerFound = customers.find((customer) => customer.cpf === cpf)

  if(!customerFound){
    return response.status(404).json({error: "Customer not found"})
  }

  request.customer = customerFound
  next()
}

// Routes
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

app.get('/statement', verifyIfExistsAccountWithCPF, (request, response) => {
  const {customer} = request

  return response.json(customer.statement)
})

app.post('/deposit', verifyIfExistsAccountWithCPF, (request, response) => {
  const {description, amount} = request.body  
  const {customer} = request

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation)

  return response.status(201).send()
})

app.post('/withdraw', verifyIfExistsAccountWithCPF, (request, response) => {
  const {customer} = request
  const {amount} = request.body

  const balance = getBalance(customer.statement)

  if(balance < amount) {
    return response.status(400).json({error : "Insufficient funds"})
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  }

  customer.statement.push(statementOperation)

  return response.status(201).send()
})

app.get('/statement/date', verifyIfExistsAccountWithCPF, (request, response) => {
  const {date} = request.query
  const {customer} = request

  const dateFormat = new Date(date + " 00:00")

  const statement = customer.statement.filter((operation) => operation.created_at.toDateString() === dateFormat.toDateString())

  return response.json(statement)
})

app.put("/account", verifyIfExistsAccountWithCPF, (request, response) => {
  const {customer} = request 
  const {name} = request.body

  customer.name = name

  return response.status(201).send()
})

app.get('/account', verifyIfExistsAccountWithCPF, (request, response) => {
  const {customer} = request

  return response.json(customer) 
})

app.delete('/account', verifyIfExistsAccountWithCPF, (request, response) => {
  const {customer} = request

  customers.splice(customer, 1)

  return response.status(200).json(customers) 
})

app.get('/balance', verifyIfExistsAccountWithCPF, (request, response) => {
  const {customer} = request

  const balance = getBalance(customer.statement)

  return response.json(balance)
})

app.listen(3333)