const express = require('express')
//const cors = require('cors')
const funcionalidades = require('./funcionalidadesRoute')
const projetos = require('./projetosRoute')
const usuarios = require('./usuariosRoute')
const sprints = require('./sprintsRoute')


module.exports = app => {
    //app.use(cors())
    app.use(express.json())
    app.use(funcionalidades)
    app.use(projetos)
    app.use(usuarios)
    app.use(sprints)
}
