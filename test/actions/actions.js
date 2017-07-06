import { expect } from 'chai';
import * as actions from '../../src/actions/index';

describe('actions', () => {  
  it('get weather should be available', () => {
    expect(actions.getWeather()).to.exist;
  })
})