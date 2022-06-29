import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { selectCart } from './store/slices/cartSlice';

import Home from './pages/home/Home'
import NotFound from './pages/NotFound/NotFound';

import Header from './components/header/Header';
import Cart from './components/cart/Cart'
import TabBar from './components/tabBar/TabBar';



const App: FC = () => {
  const { showCart } = useSelector(selectCart)

  return (
    < div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes >
      <TabBar />
      {showCart && <Cart />}
    </div >
  );
}

export default App;
