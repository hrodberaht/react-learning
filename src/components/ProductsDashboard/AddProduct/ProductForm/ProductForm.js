import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';

class ProductForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Product Name:
            <Field id="name" name="name" component="input" type="text" />
          </label>
          <label htmlFor="price">
            Price:
            <Field id="price" name="price" component="input" type="number" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'addProduct',
})(ProductForm);

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
