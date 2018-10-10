import React from 'react';
import { shallow } from 'enzyme';
import { LogIn } from './LogIn';

describe('<LogIn />', () => {
  let wrapper;
  const props = {
    handleLogIn: jest.fn(),
    history: [],
  };

  const setValuesToInputs = () => {
    wrapper.find('#login').simulate('change', { target: { value: 'John', id: 'login' } });
    wrapper.find('#password').simulate('change', { target: { value: 'test@test.pl', id: 'password' } });
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
    expect(wrapper.state()).toEqual({ login: 'John', password: 'test@test.pl' });
  });

  it('should call handleLogIn function with login and password', () => {
    setValuesToInputs();
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(props.handleLogIn).toHaveBeenCalled();

    expect(wrapper.state()).toEqual({ login: '', password: '' });
  });
});
