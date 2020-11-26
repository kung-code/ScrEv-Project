import axios from "axios";
import React from "react";
import EnumUser from "./EnumUser";

class InputUser extends React.Component {

    constructor() {
        super();
        this.state = {
          nome: '',
          login: '',
          senha: '',
          tipo: 0
        };
      }
    
      onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }

    handleSubmit = event =>{
        event.preventDefault();

        const { nome, login, senha, tipo } = this.state;

        axios.post(`http://localhost:3333/Usuarios`,{ nome, login, senha, tipo })
        .then(res =>{
            console.log(res);
            console.log(res.data);
            window.location.reload();
        })
    }

    render(){
        return (
          <form onSubmit={this.handleSubmit} >
           <input 
               class="form-group form-control"
               type="text" 
               name="nome" 
               placeholder="Nome"
               onChange={this.onChange}
               />
            <input 
               class="form-group form-control"
               type="email" 
               name="login" 
               placeholder="E-mail"
               onChange={this.onChange}
               />
           <input 
               class="form-group form-control"
               type="password" 
               name="senha" 
               placeholder="Senha"
               onChange={this.onChange}
               />

            <div class="form-group">
              <label for="tipo">Tipo de usuário:</label>
                <select name="tipo" onChange={this.onChange}>
                  {
                    EnumUser.map(res =>(
                      <option key={res.id} value={res.id}>{res.tipo}</option>
                    ))
                  }
                </select>
              </div>
              <div class="update ml-auto mr-auto">
                <button type="submit" class="btn-round btn btn-primary" >Adicionar</button> 
              </div>
          </form>  
        );
    };
}


export default InputUser;