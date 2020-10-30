const database = require('../models')

class FuncionalidadeController {

// CREATE
    static async criaFuncionalidade(req,res) {
        const novaFuncionalidade = req.body
        try {
            const funcionalidadCriada = await database.Funcionalidades.create(novaFuncionalidade)
            return res.status(200).json(funcionalidadCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

//READ
    static async listaFuncionalidades(req,res) {
        try {
            const funcionalidades = await database.Funcionalidades.findAll()
            return res.status(200).json(funcionalidades)
        } catch {

        }
    }

//READ ONE
    static async pegaUmaFuncionalidade(req,res) {
        const { id } = req.params
        try {
            const funcionalidade = await database.Funcionalidades.findOne( {
                where: {
                    id: Number(id)
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
             await database.Funcionalidades.update( novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const funcionalidadeAtualizada = await database.Funcionalidades.findOne({
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
            const funcionalidade = await database.Funcionalidades.destroy( {
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