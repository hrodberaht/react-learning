import { Search } from './Search';

describe('<Search />', () => {
  const defaultProps = {
    handleChange: jest.fn(),
  };
  const setup = buildSetup(Search, defaultProps, null);

  it('should render without crash', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });

  it('should call onChange when typing in input', () => {
    const { wrapper, props } = setup();
    wrapper.find('input').simulate('change', { target: { value: '1' } });
    wrapper.find('input').simulate('change', { target: { value: '2' } });

    expect(props.handleChange.mock.calls.length).toBe(2);
  });
});
