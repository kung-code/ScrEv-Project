const database = require('../models')
const usuarios = database.usuarios;
const sprints = database.sprints;
const projetos = database.projetos;
class FuncionalidadeController {

// CREATE
    static async criaFuncionalidade(req,res) {
        const novaFuncionalidade = req.body
        try {
            const funcionalidadCriada = await database.funcionalidades.create(novaFuncionalidade)
            return res.status(200).json(funcionalidadCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
static async listaFuncionalidades(req,res) {
    try {
        const funcionalidades = await database.funcionalidades.findAll({
            include:[
                {
                    model: usuarios
                }
            ]
        })
        return res.status(200).json(funcionalidades)
    } catch {

    }
}

//READ BY SPRINT
static async listaFuncionalidadesPorSprint(req,res) {
    const { id } = req.params
    try {
        const funcionalidade = await database.funcionalidades.findAll( {
            where: {
                sprint_id: Number(id)
            },
            include:[
                {
                    model: usuarios
                },
                
            ]
        })
        return res.status(200).json(funcionalidade)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//READ ONE
static async pegaUmaFuncionalidade(req,res) {
    const { id } = req.params
    try {
        const funcionalidade = await database.funcionalidades.findOne( {
            where: {
                id: Number(id)
            },
            include:[
                {
                    model: usuarios
                }
            ]
        })
        return res.status(200).json(funcionalidade)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//READ BY USERS
static async pegaFuncionalidadePorResponsavel(req,res) {
    const { id } = req.params
    try {
        const funcionalidade = await database.funcionalidades.findAll( {
            where: {
                responsavel_id: Number(id)
            }
        })
        return res.status(200).json(funcionalidade)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// read by projeto
static async pegaFuncionalidadePorProjeto(req,res) {
    const { id } = req.params
    try {
        const funcionalidade = await database.funcionalidades.findAndCountAll( {
            where: {
                projeto_id: Number(id)
            },
            include:[
                {
                    model: usuarios
                }
            ]
        })
        return res.status(200).json(funcionalidade)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
// Ler tarefas por Desenvolvedor
static async pegaFuncionalidadePorDev(req,res) {
    const { id } = req.params
    const { responsavel_id } = req.params
    try {
        const funcionalidade = await database.funcionalidades.findAndCountAll( {
            where: {
                projeto_id: Number(id),
                responsavel_id: Number(responsavel_id)
            }
        })
        return res.status(200).json(funcionalidade)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//UPDATE
    static async AtualizaFuncionalidade(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
             await database.funcionalidades.update( novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const funcionalidadeAtualizada = await database.funcionalidades.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(funcionalidadeAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

//DELETE
    static async deletaUmaFuncionalidade(req,res) {
        const { id } = req.params
        try {
            const funcionalidade = await database.funcionalidades.destroy( {
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

module.exports = FuncionalidadeController