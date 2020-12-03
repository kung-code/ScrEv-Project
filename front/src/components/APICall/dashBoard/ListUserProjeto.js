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
        userProj:[]

    }

    componentDidMount() {
        axios.get(`http://localhost:3333/dashboard/plannings/projeto/${this.state.projeto_id}`).then(res => {
            console.log(res.data);
            this.setState({ plannings: res.data });
            this.RemoveDuplicatasUser()
        });
    };


    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    RemoveDuplicatasUser(){
        const {plannings} = this.state
        let userId = []
        for(let i = 0;i < plannings.length;i++){
            if(i == 0){
                userId.push(plannings[i].usuario)
            }else if(plannings[i].usuario.id == plannings[i-1].usuario.id){
                continue
            }else{
                userId.push(plannings[i].usuario)
            }
        }
        console.log(userId)
        this.setState({userProj:userId})
    }

    render() {
     const {plannings, userProj} = this.state
    
     //this.RemoveDuplicatasUser()
        return (
            <tbody>
                {userProj.map(res => (
                    
                    <tr key={res.id}>
                        <td>{res.nome}</td>
                        <td>{res.login}</td>
                        <td>{FindTipo(res.tipo)}</td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListUserProjeto;