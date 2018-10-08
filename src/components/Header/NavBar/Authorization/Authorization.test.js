import React from 'react';
import { shallow } from 'enzyme';
import { Authorization } from './Authorization';

describe('<Authorization />', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({
      auth: false,
      handleLogOut: jest.fn(),
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

  it('should render Log out in nav, if auth is true', () => {
    const wrapper = setup({ auth: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('call handleLogOut after click Log out in nav', () => {
    const { logOut, props: { handleLogOut } } = setup({ auth: true });
    logOut.simulate('click');
    expect(handleLogOut).toHaveBeenCalled();
  });
});
