import React, { Component } from 'react';
import Form from './ProductForm/ProductForm';

export default class AddProduct extends Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div className="AddProduct">
        <Form onSubmit={this.submit} />
      </div>
    );
  }
}
