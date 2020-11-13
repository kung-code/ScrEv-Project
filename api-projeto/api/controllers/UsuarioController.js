const database = require('../models')

class UsuarioController {

//CREATE
    static async cadastraUsuario(req,res) {
        const novoUsuario = req.body
        try{
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
            res.status(200).json(novoUsuarioCriado)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
    static async listaUsuarios(req,res) {
        try{
            const usuarios = await database.Usuarios.findAll()
            return res.status(200).json(usuarios)
        }catch (error) {
            return res.status(500).json(error.message)
        }
        
    }

//READ ONE
    static async pegaUmUsuario(req,res) {
        const { id } = req.params
        try{
            const usuario = await database.Usuarios.findOne({ where: { id: Number(id)}})
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//UPDATE
static async atualizaUsuario(req,res) {
    const { id } = req.params
    const novasInfos = req.body
    try{
        await database.Usuarios.update(novasInfos, {
             where: { 
                 id: Number(id)
                }
        })
        const usuarioAtualizado = await database.Usuarios.findOne( { 
            where: {
            id: Number(id)
        }
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//DELETE
    static async deletaUsuario(req,res) {
        const { id } = req.params
        try{
            await database.Usuarios.destroy({ where: { id: Number(id)}})
            return res.status(200).json( { mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

// MÉTODOS DE ALOCAÇÕES

    static async alocaUsuarioAProjeto(req,res) {
        const { id } = req.params
        const novaAlocacao = req.body
        try {
            const alocacao = await database.Alocacoes.create(novaAlocacao, {
                where: {id: Number(id) } 
            })
            return res.status(200).json(novaAlocacao)
        } catch (error){
            return res.status(500).json(error.message)
        }

    }
}

module.exports = UsuarioController