import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux';

import { Header } from './components';
import { HomePage, CartPage } from './pages/'
// import { fetchProducts } from './store/actions/products';

import Cart from './components/cart/Cart'



const App: FC = () => {
  return (
    < div >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes >
      <Cart />
    </div >
  );
}

export default App;
