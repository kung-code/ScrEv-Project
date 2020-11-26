const { Router } = require('express')
const ProjetoController = require('../controllers/ProjetoController')

const router = Router()

router.get('/projetos', ProjetoController.listaProjetos)
router.get('/projetos/:id', ProjetoController.pegaUmProjeto)
router.post('/projetos', ProjetoController.criaProjeto)
router.put('/projetos/:id', ProjetoController.atualizaProjeto)
router.delete('/projetos/:id', ProjetoController.deletaUmProjeto)

module.exports = router