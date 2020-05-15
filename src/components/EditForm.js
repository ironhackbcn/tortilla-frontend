import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";

class EditForm extends Component {

    state = {
        name: '',
        special: '',
        size: '',
        imageUrl: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount = () => {
        const { tortilla } = this.props;

        this.setState({
            name: tortilla[0].name,
            special: tortilla[0].special,
            size: tortilla[0].size,
            imageUrl: tortilla[0].imageUrl,
        })
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input placeholder="name" value={this.state.name} onChange={this.handleChange} name="name" type="text" />
                    <input placeholder="special" value={this.state.special} onChange={this.handleChange} name="special" type="text" />
                    <input placeholder="size" value={this.state.size} onChange={this.handleChange} name="size" type="text" />
                    <input placeholder="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} name="imageUrl" type="text" />
                    <button type="submit">Edit</button>
                </form>

            </>
        );
    }
}

// export default withRouter(EditForm); Le injectamos el 'contexto' de <Route>
export default EditForm;