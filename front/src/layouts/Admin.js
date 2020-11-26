import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";
import axios from "axios";
var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projeto_id: '',
      projeto_nome:'',
      backgroundColor: "white",
      activeColor: "info",
    };
    this.mainPanel = React.createRef();
  }

  componentDidMount() {
    const {match: {params}} = this.props;
    this.setState({projeto_id:params.IdProjeto});


    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }

    axios.get(`http://localhost:3333/projetos/${params.IdProjeto}`).then(res => {
      console.log(res.data);
      this.setState({ projeto_nome: res.data.descricao });
  })

      
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = (color) => {
    this.setState({ activeColor: color });
  };
  handleBgClick = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar 
          {...this.props}
          routes={routes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          projeto_nome={this.state.projeto_nome}
          projeto_id={this.state.projeto_id}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path+"/:IdProjeto"}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        />
      </div>
    );
  }
}

export default Dashboard;
