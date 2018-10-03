import React from 'react';
import { shallow } from 'enzyme';
import { AddCardForm } from './AddCardForm';

describe('<ShowAddCard />', () => {
  let wrapper;
  const props = {
    isAddCardVisible: false,
    handleAddCard: jest.fn(),
  };

  const setValuesToInputs = () => {
    wrapper.find('#name').simulate('change', { target: { value: 'John', id: 'name' } });
    wrapper.find('#email').simulate('change', { target: { value: 'test@test.pl', id: 'email' } });
  };

  beforeEach(() => {
    wrapper = shallow(<AddCardForm {...props} />);
  });

  it('should render without crash', () => {
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
    expect(wrapper.state()).toEqual({ name: 'John', email: 'test@test.pl' });
  });

  it('should call handleAddCard function with name and email', () => {
    setValuesToInputs();
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(props.handleAddCard).toHaveBeenCalledWith('John', 'test@test.pl');
    expect(wrapper.state()).toEqual({ name: '', email: '' });
  });
});
