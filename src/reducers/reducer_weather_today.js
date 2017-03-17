import { WEATHER_TODAY } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case WEATHER_TODAY:
      // return state.([ action.payload.data ]);
      return Object.assign(state, action.payload.data)
  }
  return state;
}