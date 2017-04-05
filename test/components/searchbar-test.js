import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import { SearchBar } from '../../src/components/searchbar';

describe('<SearchBar />', function () {
  it('should have the name SearchBar', function () {
    const TestComponent = () => <SearchBar />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('SearchBar');
  });

  // it('should be a form', () => {
  //   const wrapper = shallow(<SearchBar />);
  //   expect(wrapper.find('form')).to.have.length(1);
  // });

  // it('should have a button', () => {
  //   const wrapper = shallow(<SearchBar />);
  //   expect(wrapper.find('button')).to.have.length(1);
  // });

  // it('should have state term as empty string', function () {
  //   const wrapper = shallow(<SearchBar />);
  //   expect(wrapper.state().term).to.equal('');
  // });
});