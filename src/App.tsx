import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { selectCart } from './store/slices/cartSlice';

import Home from './pages/home/Home'
import NotFound from './pages/NotFound/NotFound';

import Header from './components/header/Header';
import Cart from './components/cart/Cart'
import TabBar from './components/tabBar/TabBar';
import Form from './pages/formPage/Form';
import MarksPage from './pages/marksPage/MarksPage';


const App: FC = () => {
  const { showCart } = useSelector(selectCart)

  return (
    < div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={< Form />} />
        <Route path='*' element={<NotFound />} />
        <Route path='marks' element={<MarksPage />} />
      </Routes >
      <TabBar />
      {showCart && <Cart />}
    </div >
  );
}

export default App;
