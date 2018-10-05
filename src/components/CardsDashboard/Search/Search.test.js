import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('<Search />', () => {
  let wrapper;
  const props = {
    handleChange: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<Search {...props} />);
  });

  it('should render without crash', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when typing in input', () => {
    wrapper.find('input').simulate('change', { target: { value: '1' } });
    wrapper.find('input').simulate('change', { target: { value: '2' } });

    expect(props.handleChange.mock.calls.length).toBe(2);
  });
});
