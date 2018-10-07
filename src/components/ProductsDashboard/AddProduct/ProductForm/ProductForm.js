import React, { Component } from 'react';
import { FieldArray, Field, reduxForm } from 'redux-form';
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
  type,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <input {...input} type={type} />
    {touched
        && (error && <span>{error}</span>)}
  </React.Fragment>
);

const renderAuctionsId = ({ fields }) => (
  <React.Fragment>
    {fields.map((member, index) => (
      <p key={member}>

        <span>
           ID
          {index + 1}
        </span>
        <Field
          name={`${member}.auctionId`}
          type="number"
          component={renderField}
        />
        <button
          type="button"
          onClick={() => fields.remove(index)}
        >
          Remove
        </button>
      </p>
    ))
    }
    <p>
      <button type="button" onClick={() => fields.push({})}>
        Ad Id
      </button>
    </p>

  </React.Fragment>
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
          <label htmlFor="auctionsId">
            Auctions id:
            <FieldArray id="auctionsId" name="auctionsId" component={renderAuctionsId} type="number" />
          </label>
          <button type="submit">Submit</button>
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
