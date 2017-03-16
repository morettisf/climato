import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import WeatherToday from './components/weather-today';
import WeatherFive from './components/weather-five';

export default (
<Route path='/' component={App}>
  <IndexRoute component={WeatherToday} />
  <Route path='five' component={WeatherFive} />
</Route>
);