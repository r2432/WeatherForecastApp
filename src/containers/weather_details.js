import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';

class WeatherDetails extends Component {
	renderList(cityData) {
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(node => node.main.temp), 
			(temp) => (temp * 9/5 - 459.67));
		const pressure = cityData.list.map(node => node.main.pressure);
		const humidity = cityData.list.map(node => node.main.humidity);
		return (
			<tr key={name}>
				<td>
					<GoogleMap lat={cityData.city.coord.lat} lng={cityData.city.coord.lon} />
				</td>
				<td>
					<Chart weatherProp={temps} color='red' units='F'/>
				</td>
				<td>
					<Chart weatherProp={pressure} color='orange' units='hPa'/>
				</td>
				<td>
					<Chart weatherProp={humidity} color='blue' units='%'/>
				</td>
			</tr>
		);				
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temprature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderList)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherDetails);