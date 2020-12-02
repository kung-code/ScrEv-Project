import React from "react";
import axios from "axios";
import moment from "moment";

class InputBacklog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            horas: 0,
            nome: '',
            descricao: '',
            projeto_id: '',
            data_entrega: '',
            data_criacao: '',
            status: 0
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
        this.setState({ projeto_id: data.id })

    };


    verificaData(event) {
        let data = new Date(event);
        let inicio = new Date();
        if (inicio - data < 0) {
            return false
        } else {
            return true
        }
    }

    converteDataEmHora = () => {
        const { data_criacao, data_entrega } = this.state
        console.log(data_criacao)
        console.log(data_entrega)
        let inicio = new Date(data_criacao)
        let entrega = new Date(data_entrega)
        let dias = (entrega - inicio) / (1000 * 60 * 60 * 24)
        dias = dias.toFixed();
        let diasUteis = this.verificaDiasUteis(dias, inicio.getDay());
        let horasUteis = diasUteis * 8;
        this.setState({ horas: horasUteis })
    }

    verificaDiasUteis(dias, diaSemana) {
        let contaUteis = 0;
        let index = diaSemana
        for (let i = 0; i < dias; i++) {
            if (index == 0) {
                index++
            } else if (index == 6) {
                index = 0
            } else {
                contaUteis++
                index++
            }
        }
        return contaUteis;
    }

    handleSubmit = event => {
        event.preventDefault();
        const {
            nome,
            descricao,
            projeto_id,
            data_entrega,
            data_criacao,
            horas,
            status
        } = this.state;

        if (nome === '' || this.verificaData(data_criacao) || horas === 0) {
            console.log(data_entrega)
            return window.alert("Erro! Verificar dados")
        } else {
            axios.post(`http://localhost:3333/funcionalidades`, {
                nome,
                descricao,
                projeto_id,
                data_criacao,
                data_entrega,
                horas,
                status
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
        const { horas } = this.state;

        const processar = async (event) => {
            try{
                await this.onChange(event)
                await this.converteDataEmHora()
            }catch (err){
                console.log(err)
            }
        }
        return (
            <form >
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
                <label for="data_criacao">Data de inicio</label>
                <input
                    class="form-group form-control"
                    type="date"
                    name="data_criacao"
                    placeholder="Data de início"
                    onChange={this.onChange}
                />

                <label for="data_entrega">Data de entrega</label>
                <input
                    id="click"
                    class="form-group form-control"
                    type="date"
                    name="data_entrega"
                    placeholder="Data de Entrega"
                    onChange={processar}
                />

                <label for="horas">Horas designadas</label>

                <input
                    type="text"
                    name="horas"
                    value={horas}
                    class="form-group form-control"
                    disabled
                />

                <div class="update ml-auto mr-auto">
                    <button
                        class="btn-round btn btn-primary"
                        onClick={this.handleSubmit}>
                        Criar tarefa
                        </button>
                </div>
            </form>
        );
    };
}


export default InputBacklog;