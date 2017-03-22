import axios from 'axios';

const API_KEY = '99432abb3ddeecb498442945d0d3366b';
const WEATHER_URL = '//api.openweathermap.org/data/2.5/forecast/daily?'; // 7 day forecast

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(city) {
  const url = `${WEATHER_URL}&q=${city},us&appid=${API_KEY}`; // template string ES6 syntax
  const request = axios.get(url); // ajax request, returns a promise

  return {
    type: GET_WEATHER,
    payload: request
  };
}