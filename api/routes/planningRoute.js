const { Router } = require('express')
const PlanningController = require('../controllers/PlanningController')

const router = Router()


router.get('/plannings/projeto/:id', PlanningController.listaPlanningProjeto)


router.get('/plannings/sprint/:id',PlanningController.listaPlanningSprint)
//dashboard
router.get('/dashboard/plannings/sprint/:id',PlanningController.listaDashPlanningSprint)
router.get('/dashboard/plannings/projeto/:id', PlanningController.listaUserProjeto)

router.get('/planning/:id', PlanningController.pegaUmaPlanning)
router.get('/planning/funcionalidade/:id',PlanningController.pegaPlanningFuncionalidade)
router.post('/planning', PlanningController.criaPlanning)
router.put('/planning/:id', PlanningController.atualizaPlanning)
router.delete('/planning/:id', PlanningController.deletaUmaPlanning)

module.exports = router


