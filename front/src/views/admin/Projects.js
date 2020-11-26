
import InputProject from "components/APICall/project/InputProject";
import ListProject from "components/APICall/project/ListProject";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Modal, 
  ModalHeader, 
  ModalBody,
} from "reactstrap";

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    
    return (
      <>
        <div className="content">
        
          <Row className="justify-content-center">
            <Col lg="7" md="12" sm="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="auto">
                      <CardTitle tag="h5">Projetos</CardTitle>
                    </Col>
                    <Col lg="auto">
                      <div class="update ml-auto mr-auto">
                        <button type="button" onClick={this.toggle} class="btn-round btn btn-primary" >Criar Projeto</button> 
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>
                            Criar novo projeto
                          </ModalHeader>
                          <ModalBody>
                            <InputProject/>
                          </ModalBody>
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead> 
                    <ListProject />
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  };
}

export default Projects;