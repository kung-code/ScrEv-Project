import React from "react";
import axios from "axios";
import moment from "moment";

import {
    CardBody,
    Table
} from "reactstrap";

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

const editStyle = {
    textDecoration: 'none',
};

const linkStyle = {
    color: '#000',
    fontWeight: 'bold',
}

class ListSprint extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sprints: [],
            sprint_ativa: '',
            sprint_id: '',
            funcionalidades: [],
            projeto_id: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    changeSprint=(event)=>{
        const {projeto_id, sprint_ativa} =this.state;
        let id = event.target.value;
        axios.get(`http://localhost:3333/sprints/projeto/${projeto_id}/${id}`).then(res =>{
            this.setState({sprint_ativa:res.data})
            console.log(sprint_ativa)
        })
        axios.get(`http://localhost:3333/plannings/sprint/${id}`).then(res =>{
            console.log(res.data.funcionalidade)
            this.setState({funcionalidade: res.data.funcionalidade })
        })
    }

    componentDidMount() {
        const { projeto_id } = this.state
        const hoje = new Date();
        axios.get(`http://localhost:3333/sprints/${projeto_id}`).then(res => {
            this.setState({ sprints: res.data });
            console.log(res.data)

            for (let j = 0; j < res.data.length; j++) {
                let i = new Date(res.data[j].data_fim)

                if (i > hoje) {

                    this.setState({ sprint_ativa: res.data[j] });
                    console.log(res.data[j])
                    break;
                }
            }
        });
    };


    SelecionarSprint() {
        const { sprints, sprint_ativa } = this.state;

        return (
            <div>
                <p>Sprint # {sprint_ativa.id}</p>

                <label for="descricao">Descrição</label>
                <p name="descricao">{sprint_ativa.descricao}</p>

                <label for="data_ini">Inicio da Sprint</label>
                <p name="data_ini">{moment(sprint_ativa.data_inicio).format('D/M/Y')}</p>

                <label for="data_fim">Término da Sprint</label>
                <p name="data_fim">{moment(sprint_ativa.data_fim).format('D/M/Y')}</p>

                <label for="horas_atv">Tempo da Sprint</label>
                <p name="horas_atv">{sprint_ativa.horas} horas</p>

                <label>Selecionar outra Sprint:</label><br></br>
                <select name="sprint_id" onChange={this.changeSprint}>
                    <option value=''>-</option>
                    {
                        sprints.map(res => (
                            <option value={res.id}>Sprint {res.id}</option>
                        ))
                    }
                </select>
            </div >
        )
    }

    ListaPadrao() {
        const { funcionalidades } = this.state;
        return (
            <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>Tarefa</th>
                            <th>Data de entrega</th>
                            <th>Desenvolvedor</th>
                            <th className="text-right"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {funcionalidades.map(funcionalidade => (
                            <tr key={funcionalidade.id}>
                                <td>{funcionalidade.nome}</td>
                                <td>{moment(funcionalidade.data_entrega).format('D/M/Y')}</td>
                                <td>{funcionalidade.usuario.nome}</td>

                                <td><a href="#" class="material-icons" style={delStyle}>delete</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody >
        )
    }

    render() {
        const evento = this.props.tipo;
        let resposta;
        if (evento == "ListaPadrao") {
            resposta = this.ListaPadrao()
        } else if (evento == "SelecionarSprint") {
            resposta = this.SelecionarSprint()
        } else return 0;


        return (
            <div>
                {resposta}
            </div >
        )
    };
}

export default ListSprint;