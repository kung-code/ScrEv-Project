import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
    state = {
        usuarios: [],
        projeto_id:''
        
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/plannings/projeto/`).then(res => {
            console.log(res.data);
            this.setState({ usuarios: res.data });
        });
    };


    componentWillMount(){
        let data = localStorage.getItem('ID_Projeto')
        data = JSON.parse(data);
        this.setState({projeto_id:data.id})
    }

    render(){
        const {usuarios} = this.state;

        return (
        )
    };
}


export default ListUsers;