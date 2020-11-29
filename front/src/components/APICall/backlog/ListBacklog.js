import React from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

const editStyle = {
    textDecoration: 'none'
};

class ListBacklog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funcionalidades: [],
            funcionalidadePlanning: [],
            projeto_id: '',
        }

    }

    handleButton(event) {
        localStorage.setItem('ID_Funcionalidade', JSON.stringify(event));
    }


    componentDidMount() {
        const { projeto_id } = this.state;
        axios.get(`http://localhost:3333/funcionalidades/projeto/${projeto_id}`).then(res => {
            console.log(res.data);
            this.setState({ funcionalidades: res.data.rows });
        });

    }

    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    // Funcao para deletar funcionalidade
    handleDelete = event => {

        if (window.confirm(`Deseja realmente excluir: ${event.nome}`)) {
            axios.delete(`http://localhost:3333/funcionalidades/${event.id}`)
                .then(res => {
                    console.log(res.data);
                    window.confirm(event.nome + " Deletado");
                    window.location.reload();
                })
        }
    }

    ConverteData = event => {
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    DefineSprint = event => {
        if (event.usuario.nome === "Backlog") {
            return <div>
                <Link to="/admin/planning">
                    <button type="button" class="btn-round btn btn-primary" onClick={() => this.handleButton(event)}>Adicionar a Sprint</button>
                </Link>
            </div>

        } else {
            return "Sprint # " + event.sprint_id
        }
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
                        <td>{funcionalidade.horas}  h</td>
                        <td>
                            {/*this.DefineSprint(funcionalidade)*/}
                        </td>

                        <td><a href="#"
                            class="material-icons"
                            style={delStyle}
                            onClick={() => this.handleDelete(funcionalidade)}
                        >
                            delete</a></td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListBacklog;
