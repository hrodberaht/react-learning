import React, { Component } from 'react';
import {
  FieldArray,
  Field,
  reduxForm,
  reset,
} from 'redux-form';
import { PropTypes } from 'prop-types';
import * as yup from 'yup';
import classNames from 'classnames';

const schema = yup.object().shape({
  name: yup.string().required('Required'),
  price: yup
    .number('Price must be a number')
    .required('Required')
    .positive('Price must be bigger than 0'),
  auctions: yup.array(yup.number().required('Required')),
});

const asyncValidate = values => schema.validate(values, { abortEarly: false })
  .catch((errors) => {
    const errorsReduxForm = {
      name: '',
      price: '',
      auctions: [],
    };
    errors.inner.forEach((err) => {
      errorsReduxForm[err.path] = err.message;
      if (err.path.includes('auctions')) errorsReduxForm.auctions.push(err.message);
    });
    throw errorsReduxForm;
  });

const inputsClassNames = error => classNames({
  'form-input': true,
  'form-error': error,
});

const renderField = ({
  input,
  type,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <input className={inputsClassNames(error)} {...input} type={type} />
    <div>
      {touched && error && <span>{error}</span>}
    </div>
  </React.Fragment>
);

const renderAuction = error => (auction, index, fields) => (
  <div key={auction}>

    <p>
      {index + 1}
      .
    </p>
    <Field
      name={auction}
      type="number"
      component={renderField}
    />
    <button
      className={classNames('btn', 'danger-btn')}
      type="button"
      onClick={() => fields.remove(index)}
    >
      Remove
    </button>
    {error && <span>{error}</span>}
  </div>
);

const renderAuctionsId = ({ fields, meta: { error } }) => (
  <React.Fragment>
    {fields.map(renderAuction(error))}
    <p>
      <button className={classNames('btn', 'primary-btn')} type="button" onClick={() => fields.push()}>
        Ad Id
      </button>
    </p>

  </React.Fragment>
);

const afterSubmit = (data, dispatch) => {
  dispatch(reset('addProduct'));
};
class ProductForm extends Component {
  render() {
    const { handleSubmit, pristine } = this.props;
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
          <label htmlFor="auctions">
            Auctions id:
            <FieldArray id="auctions" name="auctions" component={renderAuctionsId} type="number" />
          </label>
          <button className={classNames('btn', 'submit-btn')} type="submit" disabled={pristine}>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'addProduct',
  asyncValidate,
  onSubmitSuccess: afterSubmit,
})(ProductForm);

ProductForm.propTypes = {
  pristine: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
