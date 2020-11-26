import React from "react";
import axios from "axios";
import moment from "moment";

import {
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";

class GeneralDescriptionTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funcionalidades: [],
            funcionalidade: [],
            projeto_id: '',
            projeto_nome: ''
        }

    }

    componentDidMount() {
        const { projeto_id } = this.state;
        axios.get(`http://localhost:3333/funcionalidades/projeto/${projeto_id}`).then(res => {
            console.log(res.data);
            this.setState({ funcionalidades: res.data });
        });
    }

    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
        this.setState({ projeto_nome: data.descricao })
    }

    handleChange = (event) => {
        console.log(event)
        axios.get(`http://localhost:3333/funcionalidades/${event.target.value}`).then(res => {
            this.setState({ funcionalidade: res.data });
            console.log(res.data);
        });
    }

    render() {
        const { funcionalidades, funcionalidade, projeto_nome } = this.state;
        return (

            <div>
                <label>Selecione uma Tarefa:</label><br></br>
                <select name="funcionalidade" onChange={this.handleChange}>
                    <option value=''>-</option>
                    {
                        funcionalidades.map(func => (
                            <option value={func.id}>{func.nome}</option>
                        ))
                    }
                </select>
                <hr/>
                    
                <label for="projeto">Projeto</label>
                <p name="projeto">{projeto_nome}</p>

                <p>{funcionalidade.nome}</p><hr />
                <label for="descricao">Descricao</label><br />
                <div name="descricao">{funcionalidade.descricao}</div><br />


                <label for="dev">Desenvolvedor</label>
                <p name="dev">{funcionalidade.responsavel_id}</p>


                <label for="sprint">Sprint</label>
                <p name="sprint">Sprint # {funcionalidade.sprint_id}</p>

                <label for="dtEntrega">Data de Entrega</label>
                <p name="dtEntrega">{moment(funcionalidade.data_criacao).format('D/M/Y')}</p>

                <label for="dtCriacao">Criao em :</label>
                <p name="dtCriacao">{moment(funcionalidade.data_entrega).format('D/M/Y')}</p>

            </div>
        )
    };
}


export default GeneralDescriptionTask;