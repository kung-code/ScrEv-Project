import React from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import InputUser from "components/APICall/user/InputUser";
import ListUsers from "components/APICall/user/ListUsers";

class UserAdmin extends React.Component {

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
          <Row className="justify-content-center">
            <Col lg="7" md="12" sm="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="auto">
                      <CardTitle tag="h5">Usuários Cadastrados</CardTitle>
                    </Col>
                    <Col lg="auto">
                      <div class="update ml-auto mr-auto">
                        <button type="button" onClick={this.toggle} class="btn-round btn btn-primary" >Criar Usuário</button>
                          <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                              Criar Usuário
                            </ModalHeader>
                            <ModalBody>
                              <InputUser />
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
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th className="text-right"></th>
                      </tr>
                    </thead>
                    <ListUsers />
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

export default UserAdmin;