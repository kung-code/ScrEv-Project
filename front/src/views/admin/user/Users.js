import React from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import InputUser from "components/APICall/user/InputUser";
import ListUsers from "components/APICall/user/ListUsers";

class UserAdmin extends React.Component {
  render() {

    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col lg="7" md="12" sm="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Criar Usuário</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputUser />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="7" md="12" sm="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Usuários Cadastrados</CardTitle>
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