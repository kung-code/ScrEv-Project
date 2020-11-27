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


    }

    componentDidMount() {
        axios.get(`http://localhost:3333/plannings/projeto/${this.state.projeto_id}`).then(res => {
            console.log(res.data);
            this.setState({ plannings: res.data });
        });
    };


    componentWillMount() {
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({ projeto_id: data.id })
    }

    render() {
        const { plannings } = this.state;

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