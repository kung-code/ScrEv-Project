import React from "react";
import axios from "axios";
import moment from "moment";
import InputPlanning from "components/APICall/planning/InputPlanning.js";

import {
    Modal,
    ModalHeader,
    ModalBody,
  } from "reactstrap";

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

const editStyle = {
    textDecoration: 'none'
};

class ListBacklog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            funcionalidades: [],
            funcionalidadePlanning:[],
            projeto_id: '',
            modal: false
        }
        
    this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        const{projeto_id} = this.state;
        axios.get(`http://localhost:3333/funcionalidades/projeto/${projeto_id}`).then(res => {
            console.log(res.data);
            this.setState({ funcionalidades: res.data });
        });

    }

    componentWillMount(){
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({projeto_id:data.id})
    }

    // Funcao para deletar funcionalidade
    handleDelete = event => {

        if (window.confirm(`Deseja realmente excluir: ${event.nome}`)) {
            axios.delete(`http://localhost:3333/funcionalidades/${event.id}`)
                .then(res => {
                    console.log(res.data);
                    window.confirm(event.nome +" Deletado");
                    window.location.reload();
                })
        }
    }

    ConverteData = event => {
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    DefineSprint= event =>{
         if(event.usuario.nome === "Backlog") {
             return <div>
             <button type="button" onClick={this.toggle} class="btn-round btn btn-primary" >Adicionar a Sprint</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
            Adicionar a Sprint
          </ModalHeader>
          <ModalBody>
            <InputPlanning
            funcionalidadePlanning={event}/>
          </ModalBody>
        </Modal>
            </div>
         }else{
             return event.id
         }
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


    render() {
        const { funcionalidades } = this.state;
        return (
            <tbody>
                {funcionalidades.map(funcionalidade => (
                    <tr key={funcionalidade.id}>
                        <td>{funcionalidade.nome}</td>
                        <td>{moment(funcionalidade.data_criacao).format('D/M/Y')}</td>
                        <td>{moment(funcionalidade.data_entrega).format('D/M/Y')}</td>
                        <td>{funcionalidade.usuario.nome}</td>
                        <td>
                            {this.DefineSprint(funcionalidade)}
                        </td>

                        <td><a href="#"
                         class="material-icons"
                          style={delStyle}
                          onClick={()=> this.handleDelete(funcionalidade)} 
                          >
                              delete</a></td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListBacklog;
