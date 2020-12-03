import React from "react";
import axios from "axios";
import moment from "moment";

class GeneralDescriptionProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projetos: [],
            projetoSelecionado: [],
            planningProjeto: [],
            PO: '',
            QtdFuncionalidades: '',
            statusProjeto: '',
            totalHorasFuncionalidades: '',
            statusProjeto: '',
            sprints: [],
            QtdeSprints: '',
            SomaHorasPorSprint: ''
        }

    }

    componentWillMount() {
        axios.get(`http://localhost:3333/projetos`).then(res => {
            this.setState({ projetos: res.data })
        });
    }

    componentDidMount() {
    }

    handleChange = async (event) => {
        await axios.get(`http://localhost:3333/projetos/${event.target.value}`).then(res => {
            console.log(res.data)
            this.setState({ projetoSelecionado: res.data });
            this.setState({ PO: res.data.usuario.nome });
            this.VerificaStatusProjeto(res.data.status);
            this.PegaSprints(res.data.id);

            axios.get(`http://localhost:3333/funcionalidades/projeto/${res.data.id}`).then(res2 => {
                console.log(res2.data)
                this.setState({ QtdFuncionalidades: res2.data.count });
                this.contaHorasFunc(res2.data.rows);
            });
        });
    }

    PegaSprints = (event) => {
        axios.get(`http://localhost:3333/sprints/${event}/count`).then(res => {
            console.log(res.data)
            this.setState({ QtdeSprints: res.data.count });
            this.setState({sprints:res.data.rows});
            this.contaHorasSprint(res.data.rows);
        })
    }

    contaHorasSprint = (event) => {
        let horas = 0
        event.map(res => {
            horas = horas + res.horas
        })

        this.setState({ SomaHorasPorSprint: horas })
    }
    

    contaHorasFunc = (event) => {
        let horas = 0
        event.map(res => {
            horas = horas + res.horas
        })

        this.setState({ totalHorasFuncionalidades: horas })
    }

    VerificaStatusProjeto(event) {
        let resposta
        if (event) {
            resposta = "Concluído"
        } else {
            resposta = "Em Andamento"
        }
        this.setState({ statusProjeto: resposta })
    }

    render() {
        const { projetos,
            projetoSelecionado,
            QtdFuncionalidades,
            PO,
            statusProjeto,
            totalHorasFuncionalidades,
            QtdeSprints,
            SomaHorasPorSprint,
            sprints
        } = this.state;

        return (

            <div>
                <label>Selecione o Projeto:</label><br></br>
                <select name="projetoSelecionado" onChange={this.handleChange}>
                    <option value=''>-</option>
                    {
                        projetos.map(proj => (
                            <option value={proj.id}>{proj.descricao}</option>
                        ))
                    }
                </select>
                <div>
                    <hr />
                    <label for="projeto">Nome Do Projeto</label>
                    <p name="projeto">{projetoSelecionado.descricao}</p>

                    <label for="projeto">Product Owner:</label>
                    <p name="projeto">{PO}</p>

                    <label for="descricao">Status do Projeto</label><br />
                    <div name="descricao">{statusProjeto}</div><br />


                    <label for="tarefas">Total de Backlogs</label>
                    <p name="tarefas">{QtdFuncionalidades == '' ? '' : QtdFuncionalidades + " tarefas"}</p>

                    <label for="sprintProj">Total de horas das Backlog</label>
                    <p name="sprintProj">{totalHorasFuncionalidades == '' ? '' : totalHorasFuncionalidades + " horas"}</p>

                    <label for="sprintProj">Quantidade de Sprints</label>
                    <p name="sprintProj">{QtdeSprints == '' ? '' : QtdeSprints + " sprints"}</p>

                    {sprints.map(res=>(
                        <p>{`Sprint # ${res.id} -> ${res.horas/8} dias úteis`}</p>
                    ))}

                    <label for="horasImpl">Dias de implementação</label>
                    <p name="horasImpl"> {SomaHorasPorSprint == '' ? '' : (SomaHorasPorSprint/8) + " dias úteis" }</p>

                </div>
            </div>
        )
    };
}


export default GeneralDescriptionProject;