const express = require('express')
const app = express()

app.listen(3333, () => {
    console.log('Servidor ativo na porta 3333')
})

app.get('/', (req,res) => {
    res.send('foi')
})

module.exports = app