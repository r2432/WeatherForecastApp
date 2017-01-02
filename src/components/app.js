import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherDetails from '../containers/weather_details';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar/>
      	<WeatherDetails/>
      </div>
    );
  }
}
