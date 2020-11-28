import React from "react";
import axios from "axios";
import EnumUser from "./EnumUser";
import EditUser from "./EditUser";

import {
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap";

const editStyle = {
    textDecoration: 'none'
};

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

function FindTipo(idTipo) {
    if (idTipo !== undefined) {
        for (let i = 0; i < EnumUser.length; i++) {
            if (idTipo === EnumUser[i].id) {
                return EnumUser[i].tipo;
            }
        }
    } else {
        return '';
    }
}

class ListUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario_id: '',
            usuarios: [],
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }



    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    setData(event){
        localStorage.setItem('ID_Usuario',JSON.stringify(event));
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/usuarios`).then(res => {
            console.log(res.data);
            this.setState({ usuarios: res.data });
        });
    };

    // Funcao para deletar usuário
    handleDelete = event => {

        if (window.confirm(`Deseja realmente excluir: ${event.nome}`)) {
            axios.delete(`http://localhost:3333/Usuarios/${event.id}`)
                .then(res => {
                    console.log(res.data);
                    window.confirm(event.nome + " Deletado");
                    window.location.reload();
                })
        }
    }

    render() {
        const { usuarios } = this.state;

        return (
            <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.login}</td>
                        <td>{FindTipo(usuario.tipo)}</td>

                        <td>
                            <a href="/console/edit/user"
                             class=" material-icons"
                            style={editStyle}
                            onClick={() => this.setData(usuario.id)}
                            >edit</a>
                        </td>

                        <td>
                            <a
                                href="#"
                                class="material-icons"
                                style={delStyle}
                                onClick={() => this.handleDelete(usuario)}
                            >delete</a>
                        </td>

                    </tr>
                ))}
            </tbody>
        )
    }
};



export default ListUsers;

