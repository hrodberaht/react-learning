import React from 'react';
import { shallow } from 'enzyme';
import { Authorization } from './Authorization';

describe('<Authorization />', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({
      auth: false,
      handleLogOut: jest.fn(),
      children: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<Authorization {...props} />);

    return {
      props,
      wrapper,
      logOut: wrapper.find('NavLink'),
    };
  };

  it('render', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
