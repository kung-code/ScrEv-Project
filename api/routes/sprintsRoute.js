const { Router } = require('express')
const SprintController = require('../controllers/SprintController')

const router = Router()

router.get('/sprints', SprintController.listaSprints)
router.get('/sprints/:id', SprintController.pegaUmaSprint)
router.post('/sprints', SprintController.criaSprint)
router.put('/sprints/:id', SprintController.atualizaSprint)
router.delete('/sprints/:id', SprintController.deletaUmaSprint)

module.exports = router