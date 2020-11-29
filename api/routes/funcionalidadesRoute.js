const { Router } = require('express')
const FuncionalidadeController = require('../controllers/FuncionalidadeController')

const router = Router()

router.get('/funcionalidades/projeto/:id', FuncionalidadeController.listaFuncionalidades)
router.get('/funcionalidades/projeto/:id/task/:funcionalidade_id', FuncionalidadeController.pegaUmaFuncionalidade)
router.post('/funcionalidades', FuncionalidadeController.criaFuncionalidade)
router.put('/funcionalidades/projeto/:id/task/:funcionalidade_id', FuncionalidadeController.AtualizaFuncionalidade)
router.delete('/funcionalidades/:id', FuncionalidadeController.deletaUmaFuncionalidade)

module.exports = router

