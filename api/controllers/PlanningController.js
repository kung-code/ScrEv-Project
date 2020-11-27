const database = require('../models')
const usuarios = database.usuarios;

class PlanningController {

// CREATE
    static async criaPlanning(req,res) {
        const novaPlannig = req.body
        try {
            const plannigCriada = await database.planning.create(novaPlannig)
            return res.status(200).json(plannigCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
static async listaPlanning(req,res) {
    try {
        const planning = await database.planning.findAll()
        return res.status(200).json(planning)
    } catch {

    }
}


//READ
static async listaPlanningProjeto(req,res) {
    const { id } = req.params
    try {
        const planning = await database.planning.findAll({
            where: {
                projeto_id: Number(id)
            },
            include:[
                {
                    model:usuarios
                }
            ]
        })
        return res.status(200).json(planning)
    } catch {

    }
}

//READ ONE
    static async pegaUmaPlanning(req,res) {
        const { id } = req.params
        try {
            const planning = await database.planning.findOne( {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(planning)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//UPDATE
    static async atualizaPlanning(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
             await database.planning.update( novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const planningAtualizada = await database.planning.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(planningAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//DELETE
    static async deletaUmaPlanning(req,res) {
        const { id } = req.params
        try {
            const planning = await database.planning.destroy( {
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

module.exports = PlanningController