import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { WeatherSevenDetail } from '../../src/components/weather-seven/weather-seven-detail';

describe('<WeatherSevenDetail />', function () {
  it('should have the name WeatherSevenDetail', function () {
    const TestComponent = () => <WeatherSevenDetail />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('WeatherSevenDetail');
  });
});