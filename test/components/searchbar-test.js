import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import { expect } from 'chai';

// import configureStore from 'redux-mock-store';
// const mockStore = configureStore();

import { SearchBar } from '../../src/components/searchbar';


describe('<SearchBar />', function () {
  it('should have the name SearchBar', () => {
    const TestComponent = () => <SearchBar />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('SearchBar');
  });

  it('should call componentWillMount once', () => {
    sinon.spy(SearchBar.prototype, 'componentWillMount');
    const wrapper = shallow(<SearchBar />);
    expect(SearchBar.prototype.componentWillMount.calledOnce).to.equal(true);
  });

  it('should be a form', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have a button', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have state term as empty string', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.state().term).to.equal('');
  });

  it('should recognize onChange for input', () => {
    const handleChangeSpy = sinon.spy(SearchBar.prototype, 'onInputChange');
    const event = { target: { id: 'autocomplete', value: 'cheese' } };
    const wrapper = mount(<SearchBar />);
    wrapper.ref('searchBox').simulate('change', event);
    expect(handleChangeSpy.calledOnce).to.equal(true);
  });

  // it('should call onSubmit', () => {
  //   const onSubmit = sinon.spy(SearchBar.prototype, 'onFormSubmit');
  //   const wrapper = shallow(<SearchBar />);
  //   const form = wrapper.find('form');
  //   form.simulate('submit', { preventDefault: () => { }});
  //   expect(onSubmit.calledOnce).to.equal(true);
  // });

});







