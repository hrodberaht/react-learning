import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  let wrapper;
  const props = {
    card: {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
    },
    handleClick: jest.fn(),
  };


  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it('should render component witout crash', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run function after click button', () => {
    wrapper.find('button').simulate('click');

    expect(props.handleClick.mock.calls.length).toBe(1);
  });
});
