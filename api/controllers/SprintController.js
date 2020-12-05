const database = require('../models')
const{Op} = require('sequelize')

class SprintController {

    // CREATE
    static async criaSprint(req, res) {
        const novaSprint = req.body
        try {
            const sprintCriada = await database.sprints.create(novaSprint)
            return res.status(200).json(sprintCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    //READ

    static async listaSprints(req, res) {
        const {id} = req.params
        try {
            const sprints = await database.sprints.findAll({
                where: {
                    projeto_id: Number(id)
                }
            })
            return res.status(200).json(sprints)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

        //READ na metricas do projeto

        static async listaSprintsCount(req, res) {
            const {id} = req.params
            try {
                const sprints = await database.sprints.findAndCountAll({
                    where: {
                        projeto_id: Number(id)
                    }
                })
                return res.status(200).json(sprints)
            } catch (error) {
                return res.status(500).json(error.message)
            }
    
        }

        //READ

        static async listaSprintsPlanning(req, res) {
            const {id} = req.params
            const {horasFunc} = req.params
            try {
                const sprints = await database.sprints.findAll({
                    where: {
                        projeto_id: Number(id),
                        horas:{ 
                            [Op.gte]: Number(horasFunc)
                        }
                    }
                })
                return res.status(200).json(sprints)
            } catch (error) {
                return res.status(500).json(error.message)
            }
    
        }

    //READ ONE
    static async pegaUmaSprint(req, res) {
        const { id } = req.params
        const {projeto_id} = req.params
        try {
           const sprint = await database.sprints.findOne({
                where: {
                    projeto_id: Number(projeto_id),
                    id:Number(id)
                }
            })
            return res.status(200).json(sprint)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //UPDATE
    static async atualizaSprint(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.sprints.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const sprintAtualizada = await database.sprints.findOne({
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
    static async deletaUmaSprint(req, res) {
        const { id } = req.params
        try {
            const sprint = await database.sprints.destroy({
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