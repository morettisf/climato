import { WEATHER_TODAY } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case WEATHER_TODAY:
      return Object.assign({}, action.payload.data);
  }
  return state;
}