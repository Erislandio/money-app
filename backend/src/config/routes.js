const express = require('express')
module.exports = (server) => {
    // *url base *

    const router = express.Router()
    server.use('/api', router)

    // ! rotas de ciclo de pagamento
    const BillingCycle = require('../API/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles')

}