import React from "react";
import axios from "axios";
import EnumUser from "components/APICall/user/EnumUser";


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

class ListUserProjeto extends React.Component {

    state = {
        plannings: [],
        projeto_id: '',
        users:[]

    }

    componentDidMount() {
        axios.get(`http://localhost:3333/dashboard/plannings/projeto/${this.state.projeto_id}`).then(res => {
            console.log(res.data);
            this.setState({ plannings: res.data });
        });
    };


    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    RemoveDuplicatasUser(){
        const {plannings} = this.state
        let novaLista = []
        
        for(let i = 0; i < plannings.length;i++){
            if(i == 0){
                novaLista.push(plannings[i])
            }else if(plannings[i].membro_id === plannings[i -1].membro_id ){
                continue
            }else {
                novaLista.push(plannings[i])
            }
        }
        console.log(novaLista)
        this.setState({users: novaLista})

    }

    render() {
     const {plannings, users} = this.state
    
     //this.RemoveDuplicatasUser()
        return (
            <tbody>
                {plannings.map(planning => (
                    <tr key={planning.usuario.id}>
                        <td>{planning.usuario.nome}</td>
                        <td>{planning.usuario.login}</td>
                        <td>{FindTipo(planning.usuario.tipo)}</td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListUserProjeto;