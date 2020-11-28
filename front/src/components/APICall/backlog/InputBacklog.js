import React from "react";
import axios from "axios";

class InputBacklog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            projeto_id: '',
            responsavel_id: 99,
            sprint_id: '1',
            data_entrega: '',
            data_criacao: new Date(),
            status: false,
            usuarios: [],
            projetos: []
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/projetos`).then(res => {
            this.setState({ projetos: res.data });
        });

        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({projeto_id:data.id})

    };


    verificaData(event){
        let data = new Date(event);
        let hoje = new Date();
        if(hoje - data < 0 ){
            return false
        }else{
            return true
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {
            nome,
            descricao,
            projeto_id,
            responsavel_id,
            sprint_id,
            data_entrega,
            data_criacao,
        } = this.state;

        if (nome === '' || responsavel_id === 0 || this.verificaData(data_entrega) ) {
            return window.alert("Erro! Verificar dados")
        } else {
            axios.post(`http://localhost:3333/funcionalidades`, {
                nome,
                descricao,
                projeto_id,
                responsavel_id,
                sprint_id,
                data_criacao,
                data_entrega,
            })
                .then(res => {
                    console.log(res.data);
                    window.alert("Tarefa adicionada ao backlog")
                })
                .catch(err => { window.alert("NAO FOI " + err) })
        }
        window.location.reload();
    }
    render() {
        const { usuarios, projetos } = this.state;
        return (
            <form onSubmit={this.handleSubmit} >
                <label for="nome">Nome</label>
                <input
                    class="form-group form-control"
                    type="text"
                    name="nome"
                    placeholder="Nome da tarefa"
                    onChange={this.onChange}
                />
                <label for="descricao">Descrição</label>
                <textarea
                    class="form-group form-control"
                    type="text"
                    name="descricao"
                    placeholder="Descrição da tarefa"
                    onChange={this.onChange}
                />
                
                <label for="data_entrega">Data de entrega</label>
                <input
                    class="form-group form-control"
                    type="date"
                    name="data_entrega"
                    placeholder="Data de Entrega"
                    onChange={this.onChange}
                />
                <div class="update ml-auto mr-auto">
                    <button type="submit" class="btn-round btn btn-primary">Criar tarefa</button>
                </div>
            </form>
        );
    };
}


export default InputBacklog;