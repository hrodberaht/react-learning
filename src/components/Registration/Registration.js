import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export class Registration extends Component {
submit = (values) => {
  console.log(values);
}

render() {
  const { handleSubmit } = this.props;
  return (
    <div>
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          id="login"
          name="login"
          component="input"
          placeholder="Login"
          type="text"
        />
        <Field
          id="email"
          name="email"
          component="input"
          placeholder="Email"
          type="email"
        />
        <Field
          id="password"
          name="password"
          component="input"
          placeholder="Password"
          type="password"
        />
        <button type="submit" className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
}
}

export default reduxForm({
  form: 'registration',
})(Registration);
