import React, { Component } from 'react';

import SearchBar from '../components/searchbar';
import WeatherFiveDetail from '../components/weather-five-detail';

export default class WeatherFive extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherFiveDetail />
      </div>
    );
  }
}