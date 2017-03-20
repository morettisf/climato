import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import WeatherToday from './components/weather-today';
import WeatherSeven from './components/weather-seven';

export default (
<Route path='/' component={App}>
  <IndexRoute component={WeatherToday} />
  <Route path='seven' component={WeatherSeven} />
</Route>
);