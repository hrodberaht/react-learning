import React from 'react';
import { shallow } from 'enzyme';
import ConnectedAuthorization from './Authorization/Authorization';

import NavBar from './NavBar';

describe('<NavBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render login if auth is false', () => {
    const nav = wrapper.find(ConnectedAuthorization).prop('children')(false, jest.fn());
    expect(nav).toMatchSnapshot();
  });

  it('should render logOut if auth is true', () => {
    const nav = wrapper.find(ConnectedAuthorization).prop('children')(true, jest.fn());
    expect(nav).toMatchSnapshot();
  });
});
