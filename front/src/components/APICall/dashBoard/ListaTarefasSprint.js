import React from "react";
import axios from "axios";
import moment from "moment";

class ListaTarefasSprint extends React.Component {

        state = {
            projeto_id: '',
            sprint_ativa: '',
            planning: []

        }

    componentWillMount() {
        let data = localStorage.getItem("ID_Projeto");
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    componentDidMount() {
        const { projeto_id } = this.state
        const hoje = new Date();
        axios.get(`http://localhost:3333/sprints/${projeto_id}`).then(res => {
            this.setState({ sprints: res.data });
            //console.log(res.data)

            for (let j = 0; j < res.data.length; j++) {
                let i = new Date(res.data[j].data_fim)

                if (i > hoje) {
                    
                    axios.get(`http://localhost:3333/dashboard/plannings/sprint/${res.data[j].id}`).then(res => {
                    console.log(res.data)
                    this.setState({ planning: res.data })
                    console.log(res.data)
                })

                    break;
                }
                
            }
        });
    };
    DefineSprint = event => {
        let statusFunc
        if (event.status == 1) {
            statusFunc = "Em Execução"
        } else if (event.status == 2) {
            statusFunc = "Artefato Entregue"
        } else if (event.status == 3) {
            statusFunc = "Artefato Validado"
        } else statusFunc = 0;

        return statusFunc;
    }

    render() {
        const { planning } = this.state
        return (<tbody>
            {planning.map(res => (
                <tr key={res.id}>
                    <td>{res.funcionalidade.nome}</td>
                    <td>{this.DefineSprint(res.funcionalidade.status)}</td>
                    <td>{moment(res.funcionalidade.data_entrega).format('D/M/Y')}</td>
                </tr>
            ))}
        </tbody>

        )
    }


}

export default ListaTarefasSprint;