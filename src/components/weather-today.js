import React, { Component } from 'react';

import HeaderToday from '../components/header-today';
import SearchBar from '../components/searchbar';
import WeatherTodayDetail from '../components/weather-today-detail';

export default class WeatherToday extends Component {
  render() {
    return (
      <div>
        <HeaderToday />
        <SearchBar />
        <WeatherTodayDetail />
      </div>
    );
  }
}