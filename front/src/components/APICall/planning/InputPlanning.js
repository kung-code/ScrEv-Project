import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class InputPlanning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projeto_id: '',
            membro_id: 0,
            sprint_id: 0,
            funcionalidade_id: 0,
            status: 1,
            funcionalidade: [],
            usuarios: [],
            sprints: []
        };
    }



    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })

        data = localStorage.getItem('ID_Funcionalidade')
        data = JSON.parse(data);
        this.setState({ funcionalidade_id: data.id })
        this.setState({ funcionalidade: data })
        //localStorage.removeItem('ID_Funcionalidade')
    }

    componentDidMount() {
        const { projeto_id } = this.state

        axios.get(`http://localhost:3333/usuarios/tipo/1`).then(res => {
            this.setState({ usuarios: res.data });
        });

        axios.get(`http://localhost:3333/sprints/${projeto_id}`).then(res => {
            this.setState({ sprints: res.data });
        });

    };


    handleSubmit = event => {
        event.preventDefault();
        const {
            projeto_id,
            membro_id,
            sprint_id,
            funcionalidade_id
        } = this.state;

        if (membro_id === '' || sprint_id === '') {
            return window.alert("Dados Imcompletos")
        } else {
            axios.post(`http://localhost:3333/planning`, {
                funcionalidade_id,
                projeto_id,
                membro_id,
                sprint_id,
            }).then(res => {
                this.atualizaStatusFuncionalidade();
                console.log(res.data);
            })
                .catch(err => {
                    window.alert("NAO FOI " + err)
                });

        };
    }

    atualizaStatusFuncionalidade(){
        const{status, funcionalidade_id} = this.state
        axios.put(`http://localhost:3333/funcionalidades/${funcionalidade_id}`, {status}).then(res =>{
            console.log(res.data)
            window.alert("FOI");
        }).catch(err => {
            window.alert("NAO FOI " + err)
        });
    }


    render() {
        const { funcionalidade, usuarios, sprints } = this.state;
        return (
            <form >
                <label for="funcionalidade">Tarefa</label>
                <p name="funcionalidade">{funcionalidade.nome}</p>

                <label for="sprint_id">Selecionar Sprint</label><br />

                <select name="sprint_id" onChange={this.onChange}>
                    <option value=''>-</option>
                    {
                        sprints.map(res => (
                            <option key={res.id} value={res.id}>Sprint {res.id}</option>
                        ))
                    }
                </select><br />

                <label for="membro_id">Selecionar desenvolvedor</label><br />
                <select name="membro_id" onChange={this.onChange}>
                    <option value=''>-</option>
                    {
                        usuarios.map(res => (
                            <option key={res.id} value={res.id}>{res.nome}</option>
                        ))
                    }
                </select>

                <div class="update ml-auto mr-auto">
                    <button
                        class="btn-round btn btn-primary"
                        onClick={this.handleSubmit} >
                        Criar tarefa
                        </button>
                </div>
                <div class="text-right">
                    <Link to="/admin/backlog" ><i title="Retornar ao menu anterior" class="material-icons">keyboard_return</i>
                    </Link>
                </div>
            </form>
        );
    };
}


export default InputPlanning;