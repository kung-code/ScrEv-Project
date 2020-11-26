import React from "react";
import axios from "axios";
import moment from "moment";


const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
} ;

const editStyle = {
    textDecoration: 'none' 
} ;

class TaskUsers extends React.Component {
    state = {
        funcionalidades: [],
        usuario_id: this.props.usuario_id
    }

    componentDidMount() {
        const {usuario_id} = this.state
        axios.get(`http://localhost:3333/funcionalidades/responsavel/${usuario_id}`).then(res => {
            console.log(res.data);
            this.setState({ funcionalidades: res.data });
        });
    };

    ConverteData= event=>{
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    render(){
        const {funcionalidades} = this.state;
        return (
            <tbody>
                {funcionalidades.map(funcionalidade => (
                    <tr key={funcionalidade.id}>
                        <td>{funcionalidade.nome}</td>
                        <td>{moment(funcionalidade.data_entrega).format('D/M/Y')}</td>
                        <td>{funcionalidade.status}</td>
                        <td>{this.ConverteData(funcionalidade.updatedAt)}</td>
                        </tr>
                ))}
            </tbody>
        )
    };
}

export default TaskUsers;