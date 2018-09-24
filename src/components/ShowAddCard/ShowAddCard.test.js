import { configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { ShowAddCard } from './ShowAddCard';
import { ConnectedAddCardForm } from './AddCardForm/AddCardForm';


configure({ adapter: new Adapter() });

describe('<ShowAddCard />', () => {
  let wrapper;
  const props = {
    isAddCardVisible: false,
    handleClick: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<ShowAddCard {...props} />);
  });

  it('should render without crash', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should have button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render AddCardForm when prop toggleAddCard is true', () => {
    wrapper.setProps({ isAddCardVisible: true });
    expect(wrapper.find(ConnectedAddCardForm).length).toBe(1);
  });

  it('should run function after click', () => {
    wrapper.find('button').simulate('click');
    expect(props.handleClick.mock.calls.length).toBe(1);
  });
});
