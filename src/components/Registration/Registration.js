import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().min(3).max(8).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const asyncValidate = async (values) => {
  const errorsForm = {};
  await schema.validate(values, { abortEarly: false })
    .catch((errors) => {
      errors.inner.forEach((error) => {
        errorsForm[error.path] = error.type;
      });
    });
  const { login } = values;

  await fetch('http://localhost:3004/check', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login }),
  })
    .then(data => data.json())
    .then((data) => {
      if (data.message === 'That login is taken') {
        errorsForm.login = data.message;
      }
    });
  if (Object.keys(errorsForm).length === 0) return Promise.resolve().then();
  return Promise.reject().catch(() => { throw errorsForm; });
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
  <React.Fragment>
    <input className="form-input" {...input} type={type} placeholder={placeholder} />
    <p>{touched && error && <span>{ error }</span>}</p>
  </React.Fragment>
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
    .catch((error) => { throw new Error(error); });
}


render() {
  const { handleSubmit, pristine } = this.props;
  return (
    <div className="registration">
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
        <button type="submit" className="btn submit-btn" disabled={pristine}>Submit</button>
      </form>
    </div>
  );
}
}

withRouter(Registration);

export default reduxForm({
  form: 'registration',
  asyncValidate,
})(Registration);

Registration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
};
