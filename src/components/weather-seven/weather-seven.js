import React, { Component } from 'react';

import HeaderSeven from './header-seven';
import SearchBar from '../searchbar';
import WeatherSevenDetail from './weather-seven-detail';

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