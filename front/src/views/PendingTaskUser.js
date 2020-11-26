import TaskUsers from "components/APICall/user/TaskUsers.js";
import React from "react";
import {
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
