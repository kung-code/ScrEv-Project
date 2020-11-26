
import GeneralDescriptionTask from "components/APICall/backlog/GeneralDescriptionTask.js";
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
                  <GeneralDescriptionTask />
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