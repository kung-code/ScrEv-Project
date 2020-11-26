import React from "react";
import axios from "axios";

class DeleteBacklog extends React.Component {
    state = {
        filmes: [],
    }

    componentDidMount() {
        axios.delete(`localhost:33333/${this.state.id}`).then(res => {
            this.setState({ filmes: res.data });
        });
    };

    
}


export default DeleteBacklog;