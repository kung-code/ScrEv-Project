import React from "react";
import axios from "axios";

class InputSprint extends React.Component {

    constructor() {
        super();
        this.state = {
          data_inicio: '',
          data_fim: '',
          projeto_id: 0,
          projetos: []
        };
      }
    
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        axios.get(`http://localhost:3333/projetos`).then(res => {
            this.setState({ projetos: res.data });
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        const { data_fim, data_inicio } = this.state;

        if(data_inicio === '' || data_fim === 0  || data_fim <= data_inicio){
            return window.alert("Dados Inválidos")
        }else{
            axios.post(`http://localhost:3333/sprints`,{  data_inicio, data_fim })
        .then(res =>{
            console.log(res);
            console.log(res.data);
            window.alert("Sprint Criada com Sucesso!");
            window.location.reload();
        }).catch(err =>{ window.alert("Falha ao criar Sprint!" + err);})
        }
    }

    render(){
        const {projetos}= this.state;
        return (
          <form onSubmit={this.handleSubmit} >
              <hr/>
               <label>Ínicio da Sprint</label><br/>
           <input 
               type="date" 
               name="data_inicio" 
               placeholder="Data de criação"
               onChange={this.onChange}
               />
               <hr/>
               <label>Término da Sprint</label><br/>
            <input 
               type="date" 
               name="data_fim" 
               placeholder="Término da Sprint"
               onChange={this.onChange}
               />
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
               <button type="submit" >Criar Sprint</button> 
          </form>  
        );
    };
}


export default InputSprint;