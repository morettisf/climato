import { GET_WEATHER } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      return Object.assign({}, action.payload.data);
  }
  return state;
}