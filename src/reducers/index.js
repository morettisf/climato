import { combineReducers } from 'redux';
import WeatherTodayReducer from './reducer_weather_today';

const rootReducer = combineReducers({
  weather_today: WeatherTodayReducer
});

export default rootReducer;