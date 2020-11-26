import React from "react";
import axios from "axios";


const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
} ;

const editStyle = {
    textDecoration: 'none' 
} ;

class ListSprint extends React.Component {
    state = {
        filmes: [],
    }

    componentDidMount() {
        axios.get(`http://api.tvmaze.com/search/shows?q=star%20wars`).then(res => {
            this.setState({ filmes: res.data });
        });
    };

    render(){
        const {filmes} = this.state;
        return (
            <tbody>
                {filmes.map(filme => (
                    <tr key={filme.show.id}>
                        <td>{filme.show.name}</td>
                        <td>{filme.show.url}</td>
                        <td>{filme.show.type}</td>
                        <td>{filme.show.language}</td>
                        
                        <td><a href="#" class="material-icons" style={editStyle}>edit</a></td>
                        <td><a href="#" class="material-icons" style={delStyle}>delete</a></td>
                    </tr>
                ))}
            </tbody>
        )
    };
}


export default ListSprint;