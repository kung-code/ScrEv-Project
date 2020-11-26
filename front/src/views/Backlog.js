
import InputBacklog from "components/APICall/backlog/InputBacklog";
import React from "react";
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

import ListBacklog from "../components/APICall/backlog/ListBacklog";

class Backlog extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {

    
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
              <CardHeader>
                  <Row>
                    <Col lg="auto">
                      <CardTitle tag="h4">Backlog</CardTitle>
                    </Col>
                    <Col lg="auto">
                      <div class="update ml-auto mr-auto">
                        <button type="button" onClick={this.toggle} class="btn-round btn btn-primary" >Criar Tarefa</button> 
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>
                            Criar Tarefa
                          </ModalHeader>
                          <ModalBody>
                            <InputBacklog/>
                          </ModalBody>
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Tarefa</th>
                        <th>Data de criação</th>
                        <th>Data de entrega</th>
                        <th>Desenvolvedor</th>
                        <th>Sprint</th>
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