const express = require('express')
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json())
const customers = [];

// Middlewares
function verifyIfExistsAccountWithCPF(request, response, next) {
  const { cpf } = request.headers
  console.log("cpf", cpf)

  const customerFound = customers.find((customer) => customer.cpf === cpf)
  console.log("customerFound", customerFound)
  
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

  console.log("customer", customer)

  return response.json(customer.statement)
})

app.post('/deposit', verifyIfExistsAccountWithCPF, (request, response) => {
  const {description, amount} = request
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

app.listen(3333)