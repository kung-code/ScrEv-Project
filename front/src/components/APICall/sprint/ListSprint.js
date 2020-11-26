import React from "react";
import axios from "axios";
import moment from "moment";

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
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
            funcionalidades: []
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        const hoje = new Date();
        axios.get(`http://localhost:3333/sprints`).then(res => {
            this.setState({ sprints: res.data });

            for (let j = 0; j < res.data.length; j++) {
                let i = new Date(res.data[j].data_fim)

                if (i > hoje) {

                    this.setState({ sprint_ativa: res.data[j].id });

                    axios.get(`http://localhost:3333/funcionalidades/sprint/${this.state.sprint_ativa}`).then(res => {
                        this.setState({ funcionalidades: res.data });

                    });

                    break;
                }
            }
        });
    };

    handleChange = event => {
        console.log(event)
        axios.get(`http://localhost:3333/funcionalidades/sprint/${event.target.value}`).then(res => {
            this.setState({ funcionalidades: res.data });
            console.log(res.data);
        });
    }

    ConverteData = event => {
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    render() {
        const { sprints, funcionalidades, sprint_ativa } = this.state;

        return (
            <div>

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
                        {/*<ListSprint 
                    sprint_id={this.state.sprint_id}
                    projeto_id={this.state.sprint_id}
                    />*/}
                        <tbody>
                            {funcionalidades.map(funcionalidade => (
                                <tr key={funcionalidade.id}>
                                    <td>{funcionalidade.nome}</td>
                                    <td>{moment(funcionalidade.data_entrega).format('D/M/Y')}</td>
                                    <td>{funcionalidade.usuario.nome}</td>

                                    {/*<td><a href="#" class="material-icons" style={editStyle}>edit</a></td>*/}
                                    <td><a href="#" class="material-icons" style={delStyle}>delete</a></td>
                                </tr>
                            ))}
                        </tbody>
                        <label>Selecionar outra Sprint</label>
                        <select name="sprint_id" onChange={this.handleChange}>
                            <option value=''>-</option>
                            {
                                sprints.map(res => (
                                    <option value={res.id}>Sprint {res.id}</option>
                                ))
                            }
                        </select>
                    </Table>
                </CardBody>

            </div>
        )
    };
}

export default ListSprint;