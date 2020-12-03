import React from "react";
import axios from "axios";
import moment from "moment";

class GeneralDescriptionTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funcionalidades: [],
            projeto_id: '',
            projeto_nome: '',
            nome: '',
            descricao: '',
            responsavel: '',
            sprint: '',
            data_criacao: '',
            data_entrega: ''
        }

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
        this.setState({ projeto_nome: data.descricao })
    }

    handleChange = (event) => {
        axios.get(`http://localhost:3333/funcionalidades/${event.target.value}`).then(res => {
            console.log(res.data)
            this.setState({ nome: res.data.nome });
            this.setState({ descricao: res.data.descricao });
            res.data.status == 1 ? this.ChamaPlanning(res.data.id) : this.ChamaDadosEmBacklog()
            this.setState({data_entrega:moment(res.data.data_entrega).utcOffset("-03:00").format('D/M/Y')})
            this.setState({data_criacao:moment(res.data.data_criacao).utcOffset("-03:00").format('D/M/Y')})
        });
    }

    ChamaDadosEmBacklog(){
        this.setState({ responsavel:"Tarefa em Backlog"});
        this.setState({ sprint:"Tarefa em Backlog"});
    }

    ChamaPlanning(event) {
        axios.get(`http://localhost:3333/planning/funcionalidade/${event}`).then(res => {
            console.log(res.data)
            this.setState({ responsavel:res.data.usuario.nome});
            let resSprint = "Sprint # " + res.data.sprint_id
            this.setState({sprint:resSprint})
        });
    }

    render() {
        const { funcionalidades,
            projeto_nome,
            nome,
            descricao,
            responsavel,
            sprint,
            data_criacao,
            data_entrega
        } = this.state;
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
                <hr />

                <label for="projeto">Projeto</label>
                <p name="projeto">{projeto_nome}</p>

                <label for="projeto">Tarefa</label>
                <p name="projeto">{nome}</p><hr />

                <label for="descricao">Descricao</label><br />
                <div name="descricao">{descricao}</div><br />


                <label for="dev">Desenvolvedor</label>
                <p name="dev">{responsavel}</p>


                <label for="sprint">Sprint</label>
                <p name="sprint">{sprint}</p>

                <label for="dtEntrega">Data de Entrega</label>
                <p name="dtEntrega">{data_entrega}</p>

                <label for="dtCriacao">Criao em :</label>
                <p name="dtCriacao">{data_criacao}</p>

                <label for="sprint">Branch:</label>
                <p name="sprint">https://github.com/{projeto_nome}/Branch-{sprint}</p>

            </div>
        )
    };
}


export default GeneralDescriptionTask;