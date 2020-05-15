import React, { Component } from 'react';
import tortillaService from '../services/tortillaService';
import TortillaCard from '../components/TortillaCard';


class ListTortillas extends Component {

	state = {
		data: []
	}

	componentDidMount() {
		this.getTortillaList();
	}

	getTortillaList = () => {
		tortillaService.getAll()
			.then(data => {
				this.setState({
					data
				})
			})
			.catch(err => console.log(err));
	}

	handleDelete = (id) => {
		tortillaService.deleteTortilla(id)
			.then(result => {
				console.log(result);
				this.getTortillaList();
			})
			.catch(err => console.log(err));
	}

	render() {
		const { data } = this.state;

		return (
				<div>
					<ul>

						{data.map(tortilla => (
							<TortillaCard
								key={tortilla._id}
								data={tortilla}
								onDelete={this.handleDelete}
							/>
						))}
					</ul>
				</div>
		);
	}
}

export default ListTortillas;