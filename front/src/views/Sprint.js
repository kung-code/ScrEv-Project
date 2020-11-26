import React from "react";

// reactstrap components
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

import ListSprint from "components/APICall/sprint/ListSprint";
class Sprint extends React.Component {

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
                      <CardTitle tag="h4">Sprint Ativa</CardTitle>
                    </Col>
                    <Col lg="auto">
                      <div class="update ml-auto mr-auto">
                        <button type="button" onClick={this.toggle} class="btn-round btn btn-primary" >Criar Sprint</button> 
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>
                            Criar nova sprint
                          </ModalHeader>
                          <ModalBody>
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
                        <th>Data de entrega</th>
                        <th>Desenvolvedor</th>
                        <th>Status</th>
                        <th></th>
                        <th className="text-right"></th>
                      </tr>
                    </thead>
                    <ListSprint />
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

export default Sprint;
