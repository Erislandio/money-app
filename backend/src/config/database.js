const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.min = " O valor '{PATH} informado é menor que o limite de '{MIN}'"
mongoose.Error.messages.Number.max = " O valor '{PATH} informado é maior que o limite de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'"