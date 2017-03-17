import { WEATHER_FIVE } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case WEATHER_FIVE:
      return Object.assign({}, action.payload.data);
  }
  return state;
}