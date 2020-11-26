
import InputProject from "components/APICall/project/InputProject";
import ListProject from "components/APICall/project/ListProject";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

class Task extends React.Component {
  render() {
    
    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col md="7">
              <Card>
                <CardBody>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  };
}

export default Task;