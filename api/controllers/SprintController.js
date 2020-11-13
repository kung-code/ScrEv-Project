const database = require('../models')

class SprintController {

// CREATE
    static async criaSprint(req,res) {
        const novaSprint = req.body
        try {
            const sprintCriada = await database.Sprints.create(novaSprint)
            return res.status(200).json(sprintCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
    static async listaSprints(req,res) {
        try {
            const sprints = await database.Sprints.findAll()
            return res.status(200).json(sprints)
        } catch {

        }
    }

//READ ONE
    static async pegaUmaSprint(req,res) {
        const { id } = req.params
        try {
            const sprint = await database.Sprints.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(sprint)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//UPDATE
    static async atualizaSprint(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
             await database.Sprints.update( novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const sprintAtualizada = await database.Sprints.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(sprintAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//DELETE
    static async deletaUmaSprint(req,res) {
        const { id } = req.params
        try {
            const sprint = await database.Sprints.destroy( {
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

module.exports = SprintController