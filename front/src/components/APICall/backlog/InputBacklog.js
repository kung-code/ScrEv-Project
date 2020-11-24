import React from "react";
import axios from "axios";

class InputBacklog extends React.Component {

    constructor() {
        super();
        this.state = {
          nome: '',
          descricao: '',
          projeto_id: 0,
          responsavel_id: 0,
          sprint_id: 1,
          data_entrega:'',
          data_criacao: '',
          status:false,
          usuarios:[],
          projetos:[]
        };
      }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/usuarios/tipo/1`).then(res => {
            this.setState({ usuarios: res.data });
        });

        axios.get(`http://localhost:3333/projetos`).then(res => {
            this.setState({ projetos: res.data });
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        const { 
            nome, 
            descricao,
            projeto_id,
            responsavel_id,
            sprint_id,
            data_entrega,
            data_criacao,
         } = this.state;

        if(nome === '' || responsavel_id === 0){
            return window.alert("Dados Imcompletos")
        }else{
            axios.post(`http://localhost:3333/funcionalidades`,{
            nome, 
            descricao,
            projeto_id,
            responsavel_id,
            sprint_id,
            data_criacao,
            data_entrega,
             })
        .then(res =>{
            console.log(res.data);
            window.alert("FOi" + res)
        })
        .catch(err => { window.alert("NAO FOI "+ err)})
        }
        window.location.reload();
    }
    render(){
        const {usuarios, projetos}= this.state;
        return (
          <form onSubmit={this.handleSubmit} >
              <hr/>
              <label>Nome</label><br/>
           <input 
               type="text" 
               name="nome" 
               placeholder="nome da Funcionalidade"
               onChange={this.onChange}
               />
               <hr/>
               <label>Descricao</label><br/>
            <input 
               type="text" 
               name="descricao" 
               placeholder="descrição da Funcionalidade"
               onChange={this.onChange}
               />
               <hr/>
               <label>Data de criação</label><br/>
            <input 
               type="date" 
               name="data_criacao" 
               placeholder="Data de criação"
               onChange={this.onChange}
               />
               <hr/>
               <label>Data de entrega</label><br/>
            <input 
               type="date" 
               name="data_entrega" 
               placeholder="Data de Entrega"
               onChange={this.onChange}
               />
            <hr/>
            <label for="tipo">Responsável</label><br/>
	            <select name="responsavel_id" onChange={this.onChange}>
                <option value= ''>-</option>
                    {
                    usuarios.map( usuario =>(
                    <option value={usuario.id}>{usuario.nome}</option>
                    ))
                    }
	            </select>
                <hr/>
                <label for="tipo">Projeto</label><br/>
	            <select name="projeto_id" onChange={this.onChange}>
                <option value= ''>-</option>
                    {
                    projetos.map( res =>(
                    <option value={res.id}>{res.descricao}</option>
                    ))
                    }
	            </select>
                <hr/>
               <button type="submit" >Criar</button> 
          </form>  
        );
    };
}


export default InputBacklog;