import React, { Component } from 'react';

import Header from '../components/header';
import SearchBar from '../components/searchbar';
import WeatherTodayDetail from '../components/weather-today-detail';

export default class WeatherToday extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <WeatherTodayDetail />
      </div>
    );
  }
}