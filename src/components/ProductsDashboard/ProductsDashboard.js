import React, { Component } from 'react';
import AllProducts from './AllProducts/AllProducts';
import AddProduct from './AddProduct/AddProduct';

export default class ProductsDashboard extends Component {
  render() {
    return (
      <div>
        <AddProduct />
        <AllProducts />
      </div>
    );
  }
}
