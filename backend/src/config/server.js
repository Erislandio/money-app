// * porta da aplicação
const port = 3003

// parse no corpo da rquisição
const bodyParser = require('body-parser')
const express = require('express')
const server = express();

// !* todas as requisições vão usar url encoded
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`backend esta rodando na porta ${port}`)
})

module.exports = server








