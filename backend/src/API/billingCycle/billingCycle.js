const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome para o tipo credito'] },
    value: { type: Number, required: [true, 'Informe o valor do credito'], min: 0 }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome para o tipo do debito'] },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do debito'] },
    status: {
        type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PRENENTE', 'AGENDADO']
    }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100 },
    credits: [creditSchema],
    debits: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)