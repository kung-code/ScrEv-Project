const database = require('../models');
const usuarios = database.usuarios;
const funcionalidades = database.funcionalidades;
const sprints = database.sprints;

class PlanningController {

    // CREATE
    static async criaPlanning(req, res) {
        const novaPlannig = req.body
        try {
            const plannigCriada = await database.planning.create(novaPlannig)
            return res.status(200).json(plannigCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }


    //READ
    static async listaPlanningProjeto(req, res) {
        const { id } = req.params
        try {
            const planning = await database.planning.findAll({
                where: {
                    projeto_id: Number(id)
                },
                order: [
                    ['membro_id', 'ASC']
                ],
                include: [
                    {
                        model: usuarios
                    }, {
                        model: funcionalidades
                    }
                ]
            })
            return res.status(200).json(planning)
        } catch (error) {
            res.status(500).json(error.message)

        }
    }

    //ler usuarios do projeto e mostra no dashboard
    static async listaUserProjeto(req, res) {
        const { id } = req.params
        try {
            const planning =await database.planning.findAll({
                attribute:[
                    'membro_id'
                ],
                where: {
                    projeto_id: Number(id)
                },
                order: [
                    ['membro_id', 'ASC']
                ],
                include: [
                    {
                        model: usuarios
                    }
                ]
            })
            return res.status(200).json(planning)
        } catch (error) {
            res.status(500).json(error.message)

        }
    }

    //READ by SPRINT
    static async listaPlanningSprint(req, res) {
        const { id } = req.params
        try {
            const planning = await database.planning.findAll({
                where: {
                    sprint_id: Number(id)
                },
                include: [
                    {
                        model: funcionalidades
                    }, {
                        model: usuarios
                    }
                ]
            })
            return res.status(200).json(planning)
        } catch (error) {
            res.status(500).json(error.message)

        }
    }


        //READ by SPRINT no DashBoar (5 itens)
        static async listaDashPlanningSprint(req, res) {
            const { id } = req.params
            try {
                const planning = await database.planning.findAll({
                    where: {
                        sprint_id: Number(id)
                    },
                    include: [
                        {
                            model: funcionalidades
                        }, {
                            model: usuarios
                        }
                    ],
                    limit: 5
                })
                return res.status(200).json(planning)
            } catch (error) {
                res.status(500).json(error.message)
    
            }
        }

    //READ by funcionalidade
    static async pegaPlanningFuncionalidade(req, res) {
        const { id } = req.params
        try {
            const planning = await database.planning.findOne({
                where: {
                    funcionalidade_id: Number(id)
                },
                include: [
                    {
                        model: funcionalidades
                    }, {
                        model: sprints
                    }
                ]
            })
            return res.status(200).json(planning)
        } catch (error) {
            res.status(500).json(error.message)

        }
    }

    //READ ONE
    static async pegaUmaPlanning(req, res) {
        const { id } = req.params
        try {
            const planning = await database.planning.findOne({
                where: {
                    id: Number(id)
                },
                include: [
                    {
                        model: funcionalidades
                    }
                ]
            })
            return res.status(200).json(planning)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    //UPDATE
    static async atualizaPlanning(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.planning.update(novasInfos, {
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
    static async deletaUmaPlanning(req, res) {
        const { id } = req.params
        try {
            const planning = await database.planning.destroy({
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