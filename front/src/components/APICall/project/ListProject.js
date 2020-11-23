import React from "react";
import axios from "axios";


const editStyle = {
    textDecoration: 'none' 
} ;

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
} ;


class ListProjects extends React.Component {
    state = {
        projetos: [],
        usuarios:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/projetos`).then(res => {
            console.log(res.data);
            this.setState({ projetos: res.data });
        });
    };
//deletar projeto
handleDelete = event =>{
         
    if(window.confirm(`Deseja realmente excluir: ${event.descricao}`)){
        axios.delete(`http://localhost:3333/projetos/${event.id}`)
    .then(res =>{window.alert("FOI" + res)})
    .catch(err => window.alert("NAO FOI" + err))
    }
    window.location.reload();
}

    render(){
        const {projetos} = this.state;

        return (
            <tbody>
                {projetos.map(projeto => (
                    <tr key={projeto.id}>
                        <td>{projeto.descricao}</td>
                        <td>{projeto.usuario.nome}</td>

                        <td><a href="" class="material-icons" name="" style={editStyle}>edit</a></td>
                        <td>
                        <a 
                            href="#" 
                            class="material-icons"
                            style={delStyle}
                            onClick={()=> this.handleDelete(projeto)} 
                            >delete</a>
                        </td>

                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListProjects;