import React from "react";
import axios from "axios";
import moment from "moment";
import { 
    Col,
    Row
} from "reactstrap";

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
            planning:[],
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
            //console.log(sprint_ativa)
        })
        axios.get(`http://localhost:3333/plannings/sprint/${id}`).then(res =>{
            console.log(res.data)
            this.setState({planning: res.data })
            console.log(res.data)
        })
    }

    componentDidMount() {
        const { projeto_id, sprint_ativa } = this.state
        const hoje = new Date();
        axios.get(`http://localhost:3333/sprints/${projeto_id}`).then(res => {
            this.setState({ sprints: res.data });
            //console.log(res.data)

            for (let j = 0; j < res.data.length; j++) {
                let i = new Date(res.data[j].data_fim)

                if (i > hoje) {

                    this.setState({ sprint_ativa: res.data[j] });
                    axios.get(`http://localhost:3333/plannings/sprint/${res.data[j].id}`).then(res =>{
                        console.log(res.data)
                        this.setState({planning: res.data })
                        console.log(res.data)
                    })          
                    break;
                }
            }
        });
    };


    SelecionarSprint() {
        const { sprints, sprint_ativa } = this.state;

        return (
            <div>
                <Row>
                    <Col lg="3">
                        <div class="form-group">
                            <label for="sprint_id">Selecionar outra Sprint:</label>
                            <select class="form-control" name="sprint_id" onChange={this.changeSprint}>
                                <option value=''>-</option>
                                {
                                    sprints.map(res => (
                                        <option value={res.id}>Sprint {res.id}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="auto">
                        <h6 class="form-group">Sprint # {sprint_ativa.id}</h6>
                    </Col>
                    <Col lg="4">
                        <h6 class="form-group" for="descricao">Descrição</h6>
                        <span class="form-group" name="descricao">{sprint_ativa.descricao}</span>
                    </Col>
                    <Col>
                        <h6 class="form-group" for="data_ini">Inicio da Sprint</h6>
                        <span class="form-group" name="data_ini">{moment(sprint_ativa.data_inicio).format('D/M/Y')}</span>
                    </Col>
                    <Col>
                        <h6 class="form-group" for="data_fim">Término da Sprint</h6>
                        <span class="form-group" name="data_fim">{moment(sprint_ativa.data_fim).format('D/M/Y')}</span>
                    </Col>
                    <Col>
                        <h6 class="form-group" for="horas_atv">Tempo da Sprint</h6>
                        <span class="form-group" name="horas_atv">{sprint_ativa.horas} horas</span>
                    </Col>
                </Row >
                <hr/>
                <Row>
                    {this.ListaPadrao()}
                </Row>
            </div>
        )
    }

    ListaPadrao() {
        const { planning } = this.state;
        return (
            <CardBody>
                <Table responsive>
                    <thead className="text-primary">
                        <tr>
                            <th>Tarefa</th>
                            <th>Data de entrega</th>
                            <th>Tempo da tarefa</th>
                            <th>Desenvolvedor</th>
                            <th className="text-right"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {planning.map(res => (
                            <tr key={res.funcionalidade.id}>
                                {console.log(res)}
                                <td>{res.funcionalidade.nome}</td>
                                <td>{moment(res.funcionalidade.data_entrega).format('D/M/Y')}</td>
                                <td>{res.funcionalidade.horas} h</td>
                                <td>{res.usuario.nome}</td>

                                
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