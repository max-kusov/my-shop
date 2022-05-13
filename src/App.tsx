import React, { FC } from 'react';

import { Header } from './components';
import { HomePage, CartPage } from './pages/'

import { Routes, Route } from 'react-router-dom'

const App: FC = () => {
  return (
    <div>
      <Header />
      {/* тут контейнер? */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
