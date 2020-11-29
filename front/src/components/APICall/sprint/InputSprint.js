import React from "react";
import axios from "axios";

class InputSprint extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data_inicio: '',
            data_fim: '',
            descricao: '',
            horas: 0,
            projeto_id: this.props.projeto_id
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    processar = (event) => {
        this.onChange(event)
        this.converteDataEmHora()
    }

    converteDataEmHora = () => {
        const { data_inicio, data_fim } = this.state
        console.log(data_inicio)
        console.log(data_fim)
        let inicio = new Date(data_inicio)
        let entrega = new Date(data_fim)
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


    verificaData(event) {
        let data = new Date(event);
        let hoje = new Date();
        if (hoje - data < 0) {
            return false
        } else {
            return true
        }
    }

    comparaData(event, event2) {
        let ini = new Date(event);
        let end = new Date(event2);
        if (end - ini > 0) {
            return false
        } else {
            return true
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {
            data_fim,
            data_inicio,
            horas,
            projeto_id,
            descricao
        } = this.state;

        if (this.verificaData(data_inicio) || this.verificaData(data_fim) || this.comparaData(data_inicio, data_fim)) {
            return window.alert("Dados Inválidos")
        } else {
            axios.post(`http://localhost:3333/sprints`, {
                data_fim,
                data_inicio,
                horas,
                projeto_id,
                descricao
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    window.alert("Sprint Criada com Sucesso!");
                    window.location.reload();
                }).catch(err => { window.alert("Falha ao criar Sprint!" + err); })
        }
    }

    render() {
        const { horas } = this.state

        return (
            <form>
                <label for="descricao">Descrição da Sprint</label>
                <textarea
                    class="form-group form-control"
                    type="text"
                    name="descricao"
                    placeholder="Descreva os eventos da Sprint"
                    onChange={this.onChange}
                />



                <label for="data_inicio">Início da Sprint</label>
                <input
                    class="form-group form-control"
                    type="date"
                    name="data_inicio"
                    placeholder="Data de criação"
                    onChange={this.onChange}
                />
                <label for="data_fim">Término da Sprint</label>
                <input
                    class="form-group form-control"
                    type="date"
                    name="data_fim"
                    placeholder="Término da Sprint"
                    onChange={this.processar}
                />

                <label for="horas">Horas designadas</label>
                <a
                    href="#"
                    className="material-icons"
                    onClick={this.converteDataEmHora}>sync
                </a>

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
                        Criar Sprint
                    </button>
                </div>
            </form>
        );
    };
}


export default InputSprint;