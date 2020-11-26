/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import TaskUsers from "components/APICall/user/TaskUsers.js";
import React from "react";
// react plugin for creating notifications over the dashboard
// reactstrap components
import {
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";


class PendingTaskUser extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Seu Trabalho</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Tarefa</th>
                        <th>Data de entrega</th>
                        <th>Status</th>
                        <th>Última Alteração</th>
                      </tr>
                    </thead>
                    <TaskUsers usuario_id="3" />
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
export default PendingTaskUser;
