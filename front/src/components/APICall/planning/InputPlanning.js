import React from "react";
import axios from "axios";

class InputPlanning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projeto_id: '',
            membro_id: 0,
            sprint_id: 0,
            a: this.props.funcionalidadePlanning.id,
            usuarios: [],
            sprints: []
        };
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/usuarios/tipo/1`).then(res => {
            this.setState({ usuarios: res.data });
        });

        axios.get(`http://localhost:3333/sprints`).then(res => {
            this.setState({ sprints: res.data });
        });

    };

    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    handleSubmit = event => {
        event.preventDefault();
        const {
            projeto_id,
            membro_id,
            sprint_id,
            a
        } = this.state;

        if (membro_id === '' || sprint_id === '') {
            return window.alert("Dados Imcompletos")
        } else {
            axios.post(`http://localhost:3333/planning`, {
                a,
                projeto_id,
                membro_id,
                sprint_id,
            }).then(res => {
                    console.log(res.data);
                })
                .catch(err => { 
                    window.alert("NAO FOI " + err) 
                    window.location.reload()
                });

                let responsavel_id = membro_id;
        
            axios.put(`http://localhost:3333/funcionalidades/${a}`,{
                responsavel_id,
                sprint_id
            }).then(res => {
                console.log(res.data);
                window.alert("FOi" + res)
            })
            .catch(err => { window.alert("NAO FOI " + err) })
            };
            window.location.reload();

        
    }
    render() {
        const { usuarios, sprints } = this.state;
        return (
            <form onSubmit={this.handleSubmit} >

                <label for="sprint_id">Selecionar Sprint</label><br/>

                <select name="sprint_id" onChange={this.onChange}>
                    <option value=''>-</option>
                    {
                        sprints.map(res => (
                            <option key={res.id} value={res.id}>Sprint {res.id}</option>
                        ))
                    }
                </select><br/>

                <label for="membro_id">Selecionar desenvolvedor</label><br/>
                <select name="membro_id" onChange={this.onChange}>
                    <option value=''>-</option>
                    {
                        usuarios.map(res => (
                            <option key={res.id} value={res.id}>{res.nome}</option>
                        ))
                    }
                </select>

                <div class="update ml-auto mr-auto">
                    <button type="submit" class="btn-round btn btn-primary">Criar tarefa</button>
                </div>
            </form>
        );
    };
}


export default InputPlanning;