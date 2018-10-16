import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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

const asyncValidate = (values) => {
  const { login } = values;
  return fetch('http://localhost:3004/check', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login }),
  })
    .then(data => data.json())
    .then((data) => {
      if (data.message === 'That login is taken') {
        const error = { login: data.message };
        throw error;
      }
    });
};


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
redirect = () => {
  this.props.history.push('/login');
}

submit = (values) => {
  const { login, email, password } = values;
  fetch('http://localhost:3004/registration', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, email, password }),
  })
    .then(data => data.json())
    .then((data) => {
      if (data.message === 'user added') this.redirect();
    })
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

withRouter(Registration);

export default reduxForm({
  form: 'registration',
  validate,
  asyncValidate,
  asyncChangeFields: ['login'],
})(Registration);

Registration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
