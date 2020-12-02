import React from "react";
import axios from "axios";
import moment from "moment";

class GeneralDescriptionProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projetos: [],
            funcionalidade: [],
        }

    }

    componentDidMount() {
        const { projeto_id } = this.state;
        axios.get(`http://localhost:3333/projetos`).then(res => {
            console.log(res.data);
            this.setState({ projetos: res.data.rows });
        });
    }

    handleChange = (event) => {
        console.log(event)
        axios.get(`http://localhost:3333/funcionalidades/${event.target.value}`).then(res => {
            this.setState({ funcionalidade: res.data});
            console.log(res.data);
        });
    }

    render() {
        const { projetos, funcionalidade,  } = this.state;
        return (

            <div>
                <label>Selecione o Projeto:</label><br></br>
                <select name="funcionalidade" onChange={this.handleChange}>
                    <option value=''>-</option>
                    {
                        projetos.map(proj => (
                            <option value={proj.id}>{proj.descricao}</option>
                        ))
                    }
                </select>
                <hr/>
                    

                <label for="projeto">Tarefa</label>
                <p name="projeto">{funcionalidade.nome}</p><hr />

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

                <label for="sprint">Branch:</label>
                <p name="sprint">https://github.com/{projeto_nome}/Branch-{funcionalidade.sprint_id}</p>

            </div>
        )
    };
}


export default GeneralDescriptionProject;