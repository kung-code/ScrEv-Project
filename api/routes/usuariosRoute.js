const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router.get('/Usuarios', UsuarioController.listaUsuarios)
router.get('/Usuarios/:id', UsuarioController.pegaUmUsuario)
router.post('/Usuarios', UsuarioController.cadastraUsuario)
router.put('/Usuarios/:id', UsuarioController.atualizaUsuario)
router.delete('/Usuarios/:id', UsuarioController.deletaUsuario)

module.exports = router