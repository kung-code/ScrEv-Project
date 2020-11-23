
import InputBacklog from "components/APICall/backlog/InputBacklog";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
 // CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import ListBacklog from "../components/APICall/backlog/ListBacklog";

class Backlog extends React.Component {
  render() {
    
    return (
      <>
        <div className="content">
        <Row>
            <Col md="12">
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
                      <p className="card-category">Adicionar</p>
                      <a href="/"
                          className="simple-text logo-normal" 
                          style={{textDecoration: 'none'}}>Tarefa</a>
                        <p />
                      </div>
                    </Col>
                  </Row>
                  <InputBacklog/>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Backlog</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Tarefa</th>
                        <th>Data de entrega</th>
                        <th>Data de criação</th>
                        <th>Desenvolvedor</th>
                        <th></th>
                        <th className="text-right"></th>
                      </tr>
                    </thead> 
                    <ListBacklog />
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

export default Backlog;