import React from "react";
import axios from "axios";


const editStyle = {
    textDecoration: 'none' 
} ;

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
} ;

const linkStyle = {
    color: '#000',
    fontWeight: 'bold',
}

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

        //encontrar usuarios PO
        axios.get(`http://localhost:3333/usuarios/tipo/2`).then(res => {
            console.log(res.data);
            this.setState({ usuarios: res.data });
        });

    };

    TipoToNome(event){
        if (event!== undefined){
            for(let i= 0; i< this.state.usuarios.length;i++){
                if(this.state.usuarios[i].id === event)
                    return this.state.usuarios[i].nome;
            }
        }
        return "Erro! PO não encontrado";
    }
//deletar projeto
    handleDelete = event =>{
         
        if(window.confirm(`Deseja realmente excluir: ${event.descricao}`)){
            axios.delete(`http://localhost:3333/Usuarios/${event.id}`)
        .then(res =>{
            console.log(res.data);
            window.location.reload();
        })
        }
    }

    render(){
        const {projetos} = this.state;

        return (
            <tbody>
                {projetos.map(projeto => (
                    <tr key={projeto.id}>
                        <td>{projeto.descricao}</td>
                        <td><a href="#" style={linkStyle}>{this.TipoToNome(projeto.product_owner_id)}</a></td>

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