
import InputProject from "components/APICall/project/InputProject";
import ListProject from "components/APICall/project/ListProject";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
 // CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Projects extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {projeto_id: ''
    }
  }

  set_projeto_id=(event) =>{
    this.setState({projeto_id: event})
    this.props.set_id(event);
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
                    <Col md="8" xs="7">
                      <div className="numbers">
                      <p className="card-category">Criar</p>
                      <CardTitle className="text-primary" tag="p">Projeto</CardTitle>
                        <p />
                        <InputProject/>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Projetos</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nome do Projeto</th>
                        <th>Responsável</th>
                        <th></th>
                      </tr>
                    </thead> 
                    <ListProject set_id={this.set_projeto_id} />
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