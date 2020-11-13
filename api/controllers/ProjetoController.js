const database = require('../models')

class ProjetoController {

// CREATE
    static async criaProjeto(req,res) {
        const novoProjeto = req.body
        try {
            const projetoCriado = await database.Projetos.create(novoProjeto)
            return res.status(200).json(projetoCriado)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
    static async listaProjetos(req,res) {
        try {
            const projetos = await database.Projetos.findAll()
            return res.status(200).json(Projetos)
        } catch {

        }
    }

//READ ONE
    static async pegaUmProjeto(req,res) {
        const { id } = req.params
        try {
            const sprint = await database.Projetos.findOne( {
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
             await database.Projetos.update( novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const projetoAtualizado = await database.Projetos.findOne({
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
            const projeto = await database.Projetos.destroy( {
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