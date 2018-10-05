import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
