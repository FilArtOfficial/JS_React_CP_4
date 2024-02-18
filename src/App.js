// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductsPage from './components/ProductsPage'; 
import ProductPage from './components/ProductPage'; 
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      this.setState({ products });
    } catch (error) {
      console.error('There was a problem fetching the products: ', error);
    }
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/products" element={<ProductsPage products={this.state.products} />} />
          <Route path="/product/:id" element={<ProductPage products={this.state.products} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
