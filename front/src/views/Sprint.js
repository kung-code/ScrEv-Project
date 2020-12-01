import React from "react";
import moment from "moment";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import ListSprint from "components/APICall/sprint/ListSprint";
import InputSprint from "components/APICall/sprint/InputSprint.js";
class Sprint extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projeto_id: '',
      sprint_id: '',
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    let data = localStorage.getItem('ID_Projeto')
    data = JSON.parse(data);
    this.setState({ projeto_id: data.id })

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  SetSprint_id(event) {
    this.setState({ sprint_id: event })
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="auto">
                      <CardTitle tag="h4">Sprint Ativa</CardTitle>
                    </Col>
                    <Col lg="auto">
                      <div class="update ml-auto mr-auto">
                        <button type="button" onClick={this.toggle} class="btn-round btn btn-primary" >Criar Sprint</button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>
                            Criar nova sprint
                          </ModalHeader>
                          <ModalBody>
                            <InputSprint projeto_id={this.state.projeto_id} />
                          </ModalBody>
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                {<ListSprint
                    tipo="SelecionarSprint"/>}
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Sprint;
