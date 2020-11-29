const { Router } = require('express')
const SprintController = require('../controllers/SprintController')

const router = Router()

router.get('/sprints/:id', SprintController.listaSprints)
router.get('/sprints/projeto/:projeto_id/:id', SprintController.pegaUmaSprint)
router.post('/sprints', SprintController.criaSprint)
router.put('/sprints/:id', SprintController.atualizaSprint)
router.delete('/sprints/:id', SprintController.deletaUmaSprint)

module.exports = router