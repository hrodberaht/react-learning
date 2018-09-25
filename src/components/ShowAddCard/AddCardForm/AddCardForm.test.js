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

  it('should run function after click', () => {
    wrapper.find('button').simulate('click');
    expect(props.handleAddCard.mock.calls.length).toBe(1);
  });

  it('should state be empty strings', () => {
    expect(wrapper.state().name).toBe('');
    expect(wrapper.state().email).toBe('');
  });
  
});
