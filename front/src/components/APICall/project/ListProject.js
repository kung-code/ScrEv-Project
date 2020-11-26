import React from "react";
import axios from "axios";

const linkStyle = {
    color: '#000',
    fontWeight: 'bold',
}

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};


class ListProjects extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            IdProjeto:'',
            projetos: [],
            usuarios: []
        }
    }

    setData(event){
        localStorage.setItem('ID_Projeto',JSON.stringify(event));
    }
    

    componentDidMount() {
        axios.get(`http://localhost:3333/projetos`).then(res => {
            console.log(res.data);
            this.setState({ projetos: res.data });
        });
    };
    
    //deletar projeto
    handleDelete = event => {

        if (window.confirm(`Deseja realmente excluir: ${event.id}`)) {
            axios.delete(`http://localhost:3333/projetos/${event.id}`)
                .then(res => { window.alert("FOI" + res) })
                .catch(err => window.alert("NAO FOI" + err))
        }
        window.location.reload();
    }

    handleClick = event =>{
        window.alert(event)
    }

    render() {
        const { projetos } = this.state;

        return (
            <tbody>
                {projetos.map(projeto => (
                    <tr key={projeto.id}>
                        <td>
                        <a 
                                href="/admin/dashboard"
                                style={linkStyle}
                                onClick={() => this.setData(projeto)}
                                >{projeto.descricao}</a>
                        
                        </td>
                        <td>{projeto.usuario.nome}</td>
                        <td>
                            <a
                                href="#"
                                class="material-icons"
                                style={delStyle}
                                onClick={() => this.handleDelete(projeto)}
                            >delete</a>
                        </td>

                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListProjects;