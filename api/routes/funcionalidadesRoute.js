const { Router } = require('express')
const FuncionalidadeController = require('../controllers/FuncionalidadeController')

const router = Router()

router.get('/funcionalidades', FuncionalidadeController.listaFuncionalidades)
router.get('/funcionalidades/:id', FuncionalidadeController.pegaUmaFuncionalidade)
router.post('/funcionalidades', FuncionalidadeController.criaFuncionalidade)
router.put('funcionalidades/:id', FuncionalidadeController.AtualizaFuncionalidade)
router.delete('funcionalidades/:id', FuncionalidadeController.deletaUmaFuncionalidade)

module.exports = router