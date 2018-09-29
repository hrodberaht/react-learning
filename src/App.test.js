import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import Home from './components/Home/Home';
import CardsDashboard from './components/CardsDashboard/CardsDashboard';

describe('<App />', () => {
  let wrapper;

  const props = {
    handleFetch: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFetch function', () => {
    expect(props.handleFetch).toHaveBeenCalled();
  });

  it('should route / should link to Home', () => {
    expect(wrapper.find('Route[exact=true][path="/"]').props().component).toEqual(Home);
  });

  it('should route /cards should link to Cards', () => {
    expect(wrapper.find('Route[path="/cards"]').props().component).toEqual(CardsDashboard);
  });
});
