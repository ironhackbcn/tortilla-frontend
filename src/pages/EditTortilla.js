import React, { Component } from 'react';
import EditForm from "../components/EditForm";
import tortillaService from "../services/tortillaService";

class EditTortilla extends Component {

	state = {
		isLoading: true,
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const tortilla = await tortillaService.getById(id);

		if (tortilla[0]) {
			this.setState({
				isLoading: false,
				tortilla
			});
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { name, special, size, imageUrl } = e.target;
		const { id } = this.props.match.params;
		console.log(this.props)

		let tortilla = this.state.tortilla;
		tortilla = {
			id,
			name: name.value,
			special: special.value,
			size: size.value,
			imageUrl: imageUrl.value
		};

		if (tortilla) {
			tortillaService.editTortilla(tortilla)
				.then((res) => this.props.history.push("/tortillas"))
				
		}
	}

	render() {
		return (
			<div>
				{(this.state.isLoading ? <h1>isLoading</h1> : <EditForm handleSubmit={this.handleSubmit} tortilla={this.state.tortilla} />)}
			</div>
		);
	}

}

// EditTortilla.contextType = tortillasContext;

export default EditTortilla;