import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';

const editStyle = {
    textDecoration: 'none',
    color: 'white'
};

const returnStyle = {
    textDecoration: 'none'
};


class EditUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            nome: '',
            login: '',
            senha: '',
            confirmacaoSenha: ''
        }
    }


    componentWillMount() {
        let data = localStorage.getItem('ID_Usuario')
        this.setState({ user_id: data })
        localStorage.removeItem('ID_Usuario')
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/Usuarios/${this.state.user_id}`).then(res => {
            console.log(res.data);
            this.setState({ nome: res.data.nome })
            this.setState({ login: res.data.login })
            this.setState({ senha: res.data.senha })
            this.setState({ confirmacaoSenha: res.data.senha })
        })


    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



    handleSubmit = event => {
        event.preventDefault();
        const { nome, login, senha, confirmacaoSenha, user_id } = this.state;

        if (nome === '' || senha === '' || senha != confirmacaoSenha) {

            return window.alert("Dados Inválidos")

        } else {
            console.log(nome, login, senha, confirmacaoSenha, user_id)
            axios.put(`http://localhost:3333/Usuarios/${user_id}`, { nome, login, senha })
                .then(res => {
                    console.log(res);
                    window.alert("Dados Atualizados");
                })

        }
    }

    render() {
        const { nome, login } = this.state;
        return (
            <form onSubmit={this.handleSubmit} href="/console/users">
                <label for="nome">Nome</label>
                <input
                    class="form-group form-control"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={this.onChange}
                />
                <label for="login">E-mail</label>
                <input
                    class="form-group form-control"
                    type="email"
                    name="login"
                    value={login}
                    onChange={this.onChange}
                />
                <label for="senha">Senha</label>
                <input
                    class="form-group form-control"
                    type="password"
                    name="senha"
                    placeholder="**********"
                    onChange={this.onChange}
                />
                <label for="confirmacaoSenha">Confirmar Senha</label>
                <input
                    class="form-group form-control"
                    type="password"
                    name="confirmacaoSenha"
                    placeholder="**********"
                    onChange={this.onChange}
                />
                <div class="update ml-auto mr-auto">
                    <button type="submit" class="btn-round btn btn-primary" >
                        Alterar Dados
                        </button>
                </div>
                <div class="text-right">
                    <Link to="/console/users" style={returnStyle}><i title="Retornar ao menu anterior" class="material-icons">keyboard_return</i>
                    </Link>
                </div>
                
            </form>
        );
    };
}


export default EditUser;