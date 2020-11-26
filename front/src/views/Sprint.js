import React from "react";

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
import InputSprint from "components/APICall/sprint/InputSprint.js";
class Sprint extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      projeto_id: '',
    };
    this.mainPanel = React.createRef();
  }

  componentDidMount() {

    const { match: { params } } = this.props;
    this.setState({ projeto_id: params.IdProjeto });
  }



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
                        <p className="card-category">Adicionar:{this.state.projeto_id}</p>
                        <a href="/"
                          className="simple-text logo-normal"
                          style={{ textDecoration: 'none' }}>Sprint</a>
                        <p />
                      </div>
                    </Col>
                  </Row>
                  <InputSprint projeto_id={this.state.projeto_id}/>
                  <div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ListSprint projeto_id={this.state.projeto_id} />
        </div>
      </>
    );
  }
}
export default Sprint;
