import React, { Component } from 'react';

import HeaderToday from './header-today';
import SearchBar from '../searchbar';
import WeatherTodayDetail from './weather-today-detail';

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