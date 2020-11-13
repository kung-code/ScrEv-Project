//const cors = require('cors')
const funcionalidades = require('./funcionalidadesRoutes')
const projetos = require('./projetosRoute')
const usuarios = require('./usuariosRoute')
const sprints = require('./sprintsRoute')

module.exports = app => {

    app.use(express.json())
    app.use(funcionalidades)
    app.use(projetos)
    app.use(usuarios)
    app.use(sprints)
}
