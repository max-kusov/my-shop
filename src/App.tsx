import React, { FC } from 'react';

import { Header } from './components';
import CartPage from './pages/cart/CartPage';
import Home from './pages/home/Home';

import { Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <div>
      <Header />
      {/* тут контейнер? */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
