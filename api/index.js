const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(cors())

routes(app)

app.listen(3333, () => {
    console.log('Servidor ativo na porta 3333')
})

app.get('/', (req,res) => {
    res.send('foi')
})

module.exports = app