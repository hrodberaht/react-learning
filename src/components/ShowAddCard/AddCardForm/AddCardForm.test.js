import { shallow } from 'enzyme';
import React from 'react';
import { AddCardForm } from './AddCardForm';

describe('<ShowAddCard />', () => {
  let wrapper;
  const props = {
    isAddCardVisible: false,
    handleAddCard: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<AddCardForm {...props} />);
  });

  it('should render without crash', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should state be empty strings', () => {
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().email).toBe('');
  });

  it('should change state after change input', () => {
    wrapper.find('#name').simulate('change', { target: { value: 'John', id: 'name' } });
    wrapper.find('#email').simulate('change', { target: { value: 'test@test.pl', id: 'email' } });

    expect(wrapper.state()).toEqual({ name: 'John', email: 'test@test.pl' });
  });

  it('should call handleAddCard function with name and email', () => {
    wrapper.find('#name').simulate('change', { target: { value: 'John', id: 'name' } });
    wrapper.find('#email').simulate('change', { target: { value: 'test@test.pl', id: 'email' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(props.handleAddCard).toHaveBeenCalledWith('John', 'test@test.pl');
  });

  it('should clear state after submit', () => {
    wrapper.find('#name').simulate('change', { target: { value: 'John', id: 'name' } });
    wrapper.find('#email').simulate('change', { target: { value: 'test@test.pl', id: 'email' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(wrapper.state()).toEqual({ name: '', email: '' });
  });
});
