import React from 'react';
import { shallow } from 'enzyme';
import LogIn from './LogIn';

describe('<LogIn />', () => {
  let wrapper;
  const props = {
    handleLogIn: jest.fn(),
    history: [],
  };

  const setValuesToInputs = () => {
    wrapper.find('#login').simulate('change', { target: { value: 'John', id: 'login' } });
    wrapper.find('#email').simulate('change', { target: { value: 'test@test.pl', id: 'email' } });
  };
  beforeEach(() => {
    wrapper = shallow(<LogIn {...props} />);
  });

  it('should component render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call function handleChange', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.update();
    setValuesToInputs();
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should change state after change input', () => {
    setValuesToInputs();
    expect(wrapper.state()).toEqual({ login: 'John', email: 'test@test.pl' });
  });

  it('should call handleLogIn function with login and email', () => {
    setValuesToInputs();
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(props.handleLogIn).toHaveBeenCalled();

    expect(wrapper.state()).toEqual({ login: '', email: '' });
  });
});
