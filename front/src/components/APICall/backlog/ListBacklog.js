import React from "react";
import axios from "axios";
import moment from "moment";


const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

const editStyle = {
    textDecoration: 'none'
};

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

    // Funcao para deletar funcionalidade
    handleDelete = event => {

        if (window.confirm(`Deseja realmente excluir: ${event.nome}`)) {
            axios.delete(`http://localhost:3333/funcionalidades/${event.id}`)
                .then(res => {
                    console.log(res.data);
                    window.confirm(event.nome +" Deletado");
                    window.location.reload();
                })
        }
    }

    ConverteData = event => {
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    DefineSprint= event =>{
        if(event.sprint_id === 1){
            return <a href="#"
                    className="Button logo-normal simple-text" 
                    style={editStyle}> Adicionar a Sprint 
                    </a>
        }else{
            return event.sprint_id
        }
    }

    render() {
        const { funcionalidades } = this.state;
        return (
            <tbody>
                {funcionalidades.map(funcionalidade => (
                    <tr key={funcionalidade.id}>
                        <td>{funcionalidade.nome}</td>
                        <td>{moment(funcionalidade.data_criacao).format('D/M/Y')}</td>
                        <td>{moment(funcionalidade.data_entrega).format('D/M/Y')}</td>
                        <td>{funcionalidade.usuario.nome}</td>
                        <td>
                            {this.DefineSprint(funcionalidade)}
                        </td>
                        <td><a href="#"
                         class="material-icons"
                          style={editStyle}
                          >
                              edit</a></td>
                        <td><a href="#"
                         class="material-icons"
                          style={delStyle}
                          onClick={()=> this.handleDelete(funcionalidade)} 
                          >
                              delete</a></td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListBacklog;
