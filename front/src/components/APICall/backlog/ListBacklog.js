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
        funcionalidades: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/funcionalidades`).then(res => {
            console.log(res.data);
            this.setState({ funcionalidades: res.data });
        });
    };

    render(){
        const {funcionalidades} = this.state;
        return (
            <tbody>
                {funcionalidades.map(funcionalidade => (
                    <tr key={funcionalidade.id}>
                        <td>{funcionalidade.descricao}</td>
                        <td>{funcionalidade.data_criacao}</td>
                        <td>{funcionalidade.data_entrega}</td>
                        <td>{funcionalidade.usuario.nome}</td>
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
