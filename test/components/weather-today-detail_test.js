import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { WeatherTodayDetail } from '../../src/components/weather-today/weather-today-detail';

describe('<WeatherTodayDetail />', () => {
  it('should have the name WeatherTodayDetail', () => {
    const TestComponent = () => <WeatherTodayDetail />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('WeatherTodayDetail');
  });
});