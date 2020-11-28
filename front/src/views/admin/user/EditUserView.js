import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import EditUser from "components/APICall/user/EditUser";

class EditUserView extends React.Component {
  render() {

    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col lg="7" md="12" sm="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Editar Usuário</CardTitle>
                </CardHeader>
                <CardBody>
                  <EditUser />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default EditUserView;