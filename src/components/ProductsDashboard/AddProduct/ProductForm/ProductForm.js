import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Name should have at least 3 letters';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (values.price <= 0) {
    errors.price = 'Price should be bigger than 0';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <p>
    <input {...input} placeholder={label} type={type} />
    {touched
        && (error && <span>{error}</span>)}
  </p>
);

class ProductForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Product Name:
            <Field id="name" name="name" component={renderField} type="text" />
          </label>
          <label htmlFor="price">
            Price:
            <Field id="price" name="price" component={renderField} type="number" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'addProduct',
  validate,
})(ProductForm);

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
