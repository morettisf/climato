import { combineReducers } from 'redux';
import WeatherTodayReducer from './reducer_weather_today';
import WeatherFiveReducer from './reducer_weather_five';

const rootReducer = combineReducers({
  weather_today: WeatherTodayReducer,
  weather_five: WeatherFiveReducer
});

export default rootReducer;