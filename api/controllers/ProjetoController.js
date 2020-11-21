const database = require('../models')

class ProjetoController {

// CREATE
    static async criaProjeto(req,res) {
        const novoProjeto = req.body
        try {
            const projetoCriado = await database.projetos.create(novoProjeto)
            return res.status(200).json(projetoCriado)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
    static async listaProjetos(req,res) {
        try {
            const projetos = await database.projetos.findAll()
            return res.status(200).json(projetos)
        } catch {

        }
    }

//READ ONE
    static async pegaUmProjeto(req,res) {
        const { id } = req.params
        try {
            const projeto = await database.projetos.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(projeto)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//UPDATE
    static async atualizaProjeto(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
             await database.projetos.update( novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const projetoAtualizado = await database.projetos.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(projetoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//DELETE
    static async deletaUmProjeto(req,res) {
        const { id } = req.params
        try {
            const projeto = await database.projetos.destroy( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ProjetoController