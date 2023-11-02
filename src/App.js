import logo from './logo.svg';
import './App.css';
import Header from './header.js'
import Products from './products.js';
import Filter from './filter';
import { productList } from './productList';
import React, { useState } from 'react'
import Footer from './footer';

function App() {
  const [products, setProducts] = useState(productList);
  const brands = [...new Set(products.map((val) => val.company))]
  const category = [...new Set(products.map((val) => val.category))]

  return (
    <div className="App">
      <Header></Header>
      <div className="mainBody">
        <Products products={products}></Products>
        <Filter brands={brands} category={category} setProducts={setProducts} products={products} productList={productList}></Filter>
      </div>
      <Footer products={products} setProducts={setProducts}></Footer>
    </div>
  );
}

export default App;