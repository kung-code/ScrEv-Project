
import React from "react";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";
// reactstrap components
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

// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardSprintStackedBarChart
} from "variables/charts.js";

import ListUsersProjeto from "../components/APICall/dashBoard/ListUserProjeto";
import DadosBacklog from "../components/APICall/dashBoard/DadosBacklog";
import ListaTarefasSprint from "../components/APICall/dashBoard/ListaTarefasSprint";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.mainPanel = React.createRef();
  }
  componentDidMount(){
    const {match: {params}} = this.props;
    this.setState({projeto_id:params.IdProjeto})
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-paper text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Tarefas no backlog</p>
                        <CardTitle className="text-primary" tag="p">
                          <DadosBacklog
                          tipo="TarefaBacklog"
                          />
                          </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-settings-gear-65 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Em andamento</p>
                        <CardTitle className="text-primary" tag="p">
                          <DadosBacklog 
                          tipo="emAndamento"
                          />
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-time-alarm text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Tarefas atrasadas</p>
                        <CardTitle className="text-primary" tag="p">
                          <DadosBacklog
                          tipo="atrasada"
                          />
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-spaceship text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Tarefas concluídas</p>
                        <CardTitle className="text-primary" tag="p">
                        <DadosBacklog
                        tipo="concluida" />
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Acompanhamento do projeto</CardTitle>
                  <p className="card-category">Estimativa de tempo por sprint</p>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={dashboardSprintStackedBarChart.data}
                    options={dashboardSprintStackedBarChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tarefas do backlog</CardTitle>
                </CardHeader>
                <CardBody>
                    <DadosBacklog
                    tipo="ListarBacklog"/>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tarefas da sprint</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Data de entrega</th>
                      </tr>
                    </thead>
                    <ListaTarefasSprint />
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Membros da equipe</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th className="text-right"></th>
                      </tr>
                    </thead>
                    <ListUsersProjeto />
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
