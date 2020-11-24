import React from "react";
import InputSprint from "components/APICall/sprint/InputSprint.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import ListSprint from "components/APICall/sprint/ListSprint";
class Sprint extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-paper text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Adicionar</p>
                        <a href="/"
                          className="simple-text logo-normal"
                          style={{ textDecoration: 'none' }}>Sprint</a>
                        <p />
                      </div>
                    </Col>
                  </Row>
                  <InputSprint />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <ListSprint />

        </div>
      </>
    );
  }
}
export default Sprint;
