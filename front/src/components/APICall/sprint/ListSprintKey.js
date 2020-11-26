import React from "react";
import axios from "axios";
import moment from "moment";

const delStyle = {
    textDecoration: 'none',
    color: '#ff4757',
};

const editStyle = {
    textDecoration: 'none',
};

const linkStyle = {
    color: '#000',
    fontWeight: 'bold',
}

class ListSprintKey extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sprints: [],
            sprint_ativa: '',
            sprint_id: '',
            funcionalidades: []
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        const hoje = new Date();
        axios.get(`http://localhost:3333/sprints`).then(res => {
            this.setState({ sprints: res.data });

            for (let j = 0; j < res.data.length; j++) {
                let i = new Date(res.data[j].data_fim)

                if (i > hoje) {

                    this.setState({ sprint_ativa: res.data[j].id });

                    axios.get(`http://localhost:3333/funcionalidades/sprint/${this.state.sprint_ativa}`).then(res => {
                        this.setState({ funcionalidades: res.data });

                    });

                    break;
                }
            }
        });
    };

    handleChange = event => {
        this.props.SetSprint_id(event.target.value);
    }

    ConverteData = event => {
        var data = new Date(event);
        var dataFormatada = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        return dataFormatada;
    }

    render() {
        const { sprints} = this.state;

        return (
            <select name="sprint_id" onChange={this.handleChange}>
                <option value=''>-</option>
                {
                    sprints.map(res => (
                        <option value={res.id}>Sprint {res.id}</option>
                    ))
                }
            </select>
        )
    };
}

export default ListSprintKey;