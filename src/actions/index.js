import axios from 'axios';

const API_KEY = '99432abb3ddeecb498442945d0d3366b';
const TODAY_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const WEATHER_TODAY = 'WEATHER_TODAY';

export function weatherToday(city) {
  const url = `${TODAY_URL}&q=${city},us&appid=${API_KEY}`; // template string ES6 syntax
  const request = axios.get(url); // ajax request, returns a promise

  return {
    type: WEATHER_TODAY,
    payload: request
  };
}