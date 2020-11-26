import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import InputUser from "components/APICall/user/InputUser";

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
        </div>
      </>
    );
  }
}

export default UserAdmin;