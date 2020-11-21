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

import InputUser from "components/APICall/user/InputUser";

class UserAdmin extends React.Component {
  render() {
    
    return (
      <>
        <div className="content">
        <Row>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers">
                      <p className="card-category">Criar</p>
                      <CardTitle className="text-primary" tag="p">Usuário</CardTitle>
                        <p />
                        <InputUser />
                      </div>
                    </Col>
                  </Row>
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