import React, { Component } from 'react';
import Product from './Product/Product';

export default class AllProducts extends Component {
  render() {
    return (
      <ol>
        <Product />
      </ol>
    );
  }
}
