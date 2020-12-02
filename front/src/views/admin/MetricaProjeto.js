
import GeneralDescriptionProject from "components/APICall/project/GeneralDescriptionProject";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class MetricaProjeto extends React.Component {
  render() {
    
    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col md="7">
              <Card>
                <CardBody>
                  <GeneralDescriptionProject />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  };
}

export default MetricaProjeto;