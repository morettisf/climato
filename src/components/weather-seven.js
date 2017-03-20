import React, { Component } from 'react';

import Header from '../components/header';
import SearchBar from '../components/searchbar';
import WeatherSevenDetail from '../components/weather-seven-detail';

export default class WeatherSeven extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <WeatherSevenDetail />
      </div>
    );
  }
}