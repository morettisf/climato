import { expect } from 'chai';
import weatherReducer from '../../src/reducers/reducer_weather';

describe('reducers', () => {  
  it('weather should be available', () => {
    expect(weatherReducer).to.exist;
  })
})