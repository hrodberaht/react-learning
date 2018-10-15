import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const asyncValidate = values => Promise.resolve().then(() => {
  // simulate server latency
  if (['rob'].includes(values.login)) {
    throw { login: 'That username is taken' };
  }
});


const renderInput = ({
  input,
  type,
  placeholder,
  meta: {
    touched,
    error,
  },
}) => (
  <p>
    <input {...input} type={type} placeholder={placeholder} />
    {touched && error && <span>{ error }</span>}
  </p>
);
export class Registration extends Component {
submit = (values) => {
  const { login, email, password } = values;
  fetch('http://localhost:3004/registration', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, email, password }),
  })
    .then(data => console.log(data))
    .catch(error => console.log(error));
}


render() {
  const { handleSubmit } = this.props;
  return (
    <div>
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          id="login"
          name="login"
          label="login"
          placeholder="Login"
          type="text"
          component={renderInput}
        />
        <Field
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          component={renderInput}
        />
        <Field
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          component={renderInput}
        />
        <button type="submit" className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
}
}

export default reduxForm({
  form: 'registration',
  validate,
  asyncValidate,
  asyncChangeFields: ['login'],
})(Registration);
