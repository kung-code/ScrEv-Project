import React from "react";
import axios from "axios";


const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
} ;

const editStyle = {
    textDecoration: 'none' 
} ;

class ListBacklog extends React.Component {
    state = {
        usuarios: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/usuarios`).then(res => {
            console.log(res.data);
            this.setState({ usuarios: res.data });
        });
    };

    render(){
        const {usuarios} = this.state;
        return (
            <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.login}</td>
                        <td>{usuario.senha}</td>
                        <td>{usuario.tipo}</td>
                        <td>
                            <a href="#" className="Button logo-normal simple-text" style={editStyle}> Adicionar a Sprint </a>
                        </td>
                        <td><a href="#" class="material-icons" style={editStyle}>edit</a></td>
                        <td><a href="#" class="material-icons" style={delStyle}>delete</a></td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListBacklog;
