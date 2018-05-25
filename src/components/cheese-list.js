import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends Component {

	componentDidMount() {
		this.props.dispatch(fetchCheeses());
	}

	render() {
		console.log(this.props);
		const cheeses = this.props.cheeses.map((cheese, index) => {
			return <li key={index}>{cheese}</li>;
		});

		return (
			<ul>
				{cheeses}
			</ul>
		);
	}
}
const mapStateToProps = state => ({
	cheeses: state.cheeseReducer.cheeses
});

export default connect(mapStateToProps)(CheeseList);