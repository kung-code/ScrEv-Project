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
            planning: [],
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

    PegaSprintPorFunc = (event) => {

        axios.get(`http://localhost:3333/planning/funcionalidade/${event}`).then(res => {
            if(res === undefined) {
                return 0
            }else{
                return res.data.sprint.id;
            }
        })
    }

    ConverteData = event => {
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    chamaResposta =(event) => {
        let statusFunc
        if (event.status == 0 || event.status == undefined || event.status == null) {
            statusFunc = <div>
                <Link to="/admin/planning">
                    <button
                        type="button"
                        class="btn-round btn btn-primary"
                        onClick={() => this.handleButton(event)}>
                        Adicionar a Sprint
                        </button>
                </Link>
            </div>
        } else if (event.status == 2) {
            statusFunc = "Artefato Entregue"
        } else if (event.status == 3) {
            statusFunc = "Artefato Validado"
        } else statusFunc = 0;

        return statusFunc;
    }

    chamaNumeroSprint= async(event)=>{
        event.map(res=>{
            console.log(res.lenght)
        })
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
                            {funcionalidade.status == 1 ? `Sprint # ${funcionalidade.plannings[0].sprint_id}` : this.chamaResposta(funcionalidade)}
                        </td>

                        <td><a href="#"
                            class="material-icons"
                            style={delStyle}
                            onClick={() => this.handleDelete(funcionalidade)}>
                            delete</a></td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListBacklog;
