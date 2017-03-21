import React, { Component } from 'react';

import HeaderSeven from '../components/header-seven';
import SearchBar from '../components/searchbar';
import WeatherSevenDetail from '../components/weather-seven-detail';

export default class WeatherSeven extends Component {
  render() {
    return (
      <div>
        <HeaderSeven />
        <SearchBar />
        <WeatherSevenDetail />
      </div>
    );
  }
}