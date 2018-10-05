import React from 'react';
import { shallow } from 'enzyme';
import { AllCards } from './AllCards';

describe('<AllCards />', () => {
  let wrapper;
  const props = {
    cards: [
      {
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
      },
      {
        id: 2,
        name: 'Rob',
        email: 'rob@gmail.com',
      },
    ],
    handleClick: jest.fn(),
    filterText: '',
  };

  beforeEach(() => {
    wrapper = shallow(<AllCards {...props} />);
  });

  it('should render component witout crash', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two cards when filtertext is empty string', () => {
    const cards = wrapper.find('Card');

    expect(cards.length).toBe(2);
  });

  it('should render cards when filterText is not empty', () => {
    wrapper.setProps({ filterText: 'John' });
    const cards = wrapper.find('Card');

    expect(cards.length).toBe(1);
  });
});
