const { Router } = require('express')
const FuncionalidadeController = require('../controllers/FuncionalidadeController')

const router = Router()

router.get('/funcionalidades', FuncionalidadeController.listaFuncionalidades)
router.get('/funcionalidades/sprint/:id', FuncionalidadeController.listaFuncionalidadesPorSprint)
router.get('/funcionalidades/responsavel/:id', FuncionalidadeController.pegaFuncionalidadePorResponsavel)
router.get('/funcionalidades/projeto/:id', FuncionalidadeController.pegaFuncionalidadePorProjeto)
router.get('/funcionalidades/projeto/:id/user/:responsavel_id', FuncionalidadeController.pegaFuncionalidadePorDev)
router.get('/funcionalidades/:id', FuncionalidadeController.pegaUmaFuncionalidade)
router.post('/funcionalidades', FuncionalidadeController.criaFuncionalidade)
router.put('/funcionalidades/:id', FuncionalidadeController.AtualizaFuncionalidade)
router.delete('/funcionalidades/:id', FuncionalidadeController.deletaUmaFuncionalidade)

module.exports = router

