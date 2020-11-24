import React from "react";
import axios from "axios";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Table,
    Row,
    Col,
  } from "reactstrap";

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

const editStyle = {
    textDecoration: 'none'
};

class ListSprint extends React.Component {
    state = {
        sprints: [],
        sprint_id: '',
        funcionalidades: []
    }
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/sprints`).then(res => {
            this.setState({ sprints: res.data });
        });
        axios.get(`http://localhost:3333/funcionalidades/sprints/${this.sprint_id}`).then(res => {
            this.setState({ funcionalidades: res.data });
        });
    };

    SprintAtiva(){
        const {sprints} = this.state;
        for(let i=0;i<sprints.length;i++){
            var hoje = new Date();
            var sprintAtiva = hoje - sprints[i].data_entrega;
            if(sprintAtiva > 0){
                this.setState({ sprint_id: sprints[i].id });
                return sprints[i].id;
            }
        }
    }

    render() {
        const { sprints, funcionalidades } = this.state;
        return (
            <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Sprint Ativa: {this.SprintAtiva()}</CardTitle>
                </CardHeader>
                <CardBody>
                <Table responsive>
                <thead className="text-primary">
                    <tr>
                        <th>Tarefa</th>
                        <th>Data de entrega</th>
                        <th>Desenvolvedor</th>
                        <th>Status</th>
                        <th></th>
                        <th className="text-right"></th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map(funcionalidade => (
                        <tr key={funcionalidade.id}>
                            <td>{funcionalidade.descricao}</td>
                            <td>{funcionalidade.data_entrega}</td>
                            <td>{/*funcionalidade.usuario.nome*/}</td>

                            <td><a href="#" class="material-icons" style={editStyle}>edit</a></td>
                            <td><a href="#" class="material-icons" style={delStyle}>delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <hr />
                <label>Selecionar outra Sprint</label><br />
                <select name="sprint_id" onChange={this.onChange}>
                    <option value=''>-</option>
                    {
                        sprints.map(res => (
                            <option value={res.id}>{res.id}</option>
                        ))
                    }
                </select>
                </CardBody>
              </Card>
            </Col>
          </Row>
            
        )
    };
}

export default ListSprint;