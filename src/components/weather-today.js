import React, { Component } from 'react';

import SearchBar from '../components/searchbar';
import WeatherTodayDetail from '../components/weather-today-detail';

export default class WeatherToday extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherTodayDetail />
      </div>
    );
  }
}