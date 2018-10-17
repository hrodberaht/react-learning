import { Registration, renderInput } from './Registration';

describe('<Registration />', () => {
  const registrationProps = {
    handleSubmit: jest.fn(),
  };
  const renderInputProps = {
    placeholder: 'Login',
    type: 'text',
    meta: {
      touched: true,
      error: 'Required',
    },
  };
  const setupRegistration = buildSetup(Registration, registrationProps, null);
  const setupRenderInput = buildSetup(renderInput, renderInputProps, null);


  it('should <Registration/> render without crash', () => {
    expect(setupRegistration().wrapper).toMatchSnapshot();
  });

  it('should <renderInput/> render without crash', () => {
    expect(setupRenderInput().wrapper).toMatchSnapshot();
  });
});
