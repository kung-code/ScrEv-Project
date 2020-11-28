import React from "react";
import axios from "axios";

class DadosBacklog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projeto_id: '',
            funcionalidades: [],
            tarefaEmBacklog:[],
            qtdeTarefasBackLog:0,
            totalTarefas:0
        }
    }


    componentWillMount() {
        let data = localStorage.getItem("ID_Projeto");
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    componentDidMount() {
        const { projeto_id } = this.state
        axios.get(`http://localhost:3333/funcionalidades/projeto/${projeto_id}`).then(res => {
            console.log(res.data.count)
            this.setState({ funcionalidades: res.data.rows })
            this.setState({totalTarefas:res.data.count})
        })

        axios.get(`http://localhost:3333/funcionalidades/projeto/${projeto_id}/user/${99}`).then(res =>{
            console.log(res.data.count)
            this.setState({qtdeTarefasBackLog:res.data.count})
            this.setState({tarefaEmBacklog:res.data.rows})
        })
    }

    ContaTarefasConcluida() {

        let contaTarefa = 0
        const { funcionalidades } = this.state
        funcionalidades.map(funcionalidade => {
            if (funcionalidade.status !== null) {
                contaTarefa = contaTarefa + 1
            }
        }
        )
        return contaTarefa
    }

    ContaTarefaAtrasada(){
        const { funcionalidades } = this.state
        let hoje = new Date()
        let contaTarefa = 0;
        let data
        funcionalidades.map(funcionalidade => {
             data = new Date(funcionalidade.data_entrega)
            if (data - hoje < 0) {
                contaTarefa = contaTarefa + 1
            }
        }
        )
        return contaTarefa

    }


    render(){
        const {qtdeTarefasBackLog, totalTarefas} =this.state;
        const evento = this.props.tipo;
        let resposta;
        if(evento == "atrasada"){
            resposta = this.ContaTarefaAtrasada()
        }else if(evento == "concluida"){
            resposta = this.ContaTarefasConcluida() 
        }else if(evento == "TarefaBacklog"){
            resposta = qtdeTarefasBackLog
        }else if(evento == "emAndamento"){
            resposta = totalTarefas - qtdeTarefasBackLog
        }else resposta = "Solicitacao invalida"

        return(
            <div>
                {resposta}
            </div>
        )
    }
}
export default DadosBacklog;