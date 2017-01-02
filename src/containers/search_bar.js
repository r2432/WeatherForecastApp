import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeatherData} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
		this.updateState = this.updateState.bind(this);
		this.submit = this.submit.bind(this);
	}
	
	updateState(event) {
		this.setState({term : event.target.value});
	}

	submit(event) {
		this.props.fetchWeatherData(this.state.term);
		this.setState({term : ''});
		event.preventDefault();
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.submit}>
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term} 
					onChange={this.updateState}/>
				<span className="input-group-btn">
					<button className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeatherData}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);