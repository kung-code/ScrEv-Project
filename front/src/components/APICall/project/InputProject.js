import React from "react";
import axios from "axios";

class InputProject extends React.Component {

    constructor() {
        super();
        this.state = {
          descricao: '',
          status: false,
          product_owner_id: 0,
          usuarios:[]
        };
      }
    
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event =>{
        event.preventDefault();
        const { descricao, status, product_owner_id } = this.state;

        if(descricao === '' || product_owner_id === 0){
            return window.alert("Dados Imcompletos")
        }else{
            axios.post(`http://localhost:3333/projetos`,{ descricao, status, product_owner_id })
        .then(res =>{
            console.log(res);
            console.log(res.data);
            window.location.reload();
        })
        }
    }
//encontrar PO=2 em usuarios
    componentDidMount() {
        axios.get(`http://localhost:3333/usuarios/tipo/2`).then(res => {
            this.setState({ usuarios: res.data });
        });
    };

    render(){
        const {usuarios}= this.state;
        return (
          <form onSubmit={this.handleSubmit} >
           <input 
               type="text" 
               name="descricao" 
               placeholder="descricao"
               onChange={this.onChange}
               />

            <label for="tipo">Responsável</label>
	            <select name="product_owner_id" onChange={this.onChange}>
                <option value= ''>-</option>
                    {
                    usuarios.map( usuario =>(
                    <option value={usuario.id}>{usuario.nome}</option>
                    ))
                    }
	            </select>
               <button type="submit" >Criar</button> 
          </form>  
        );
    };
}


export default InputProject;