
import React from "react";
import InputPlanning from "components/APICall/planning/InputPlanning.js";
import {
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap";

class Planning extends React.Component {
  render() {
    
    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col md="7">
              <Card>
                <CardBody>
                  <InputPlanning />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  };
}

export default Planning;