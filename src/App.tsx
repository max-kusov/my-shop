import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux';

import { Header } from './components';
import { HomePage, CartPage } from './pages/'
// import { fetchProducts } from './store/actions/products';

import Cart from './components/cart/Cart'



const App: FC = () => {

  const [cart, setCart] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  return (
    < div >
      <Header searchValue={searchValue} setSearchValue={setSearchValue} setCart={setCart} />
      <Routes>
        <Route path='/' element={<HomePage searchValue={searchValue} />} />
        <Route path='/profile' element={<CartPage />} />
      </Routes >
      {cart && <Cart setCart={setCart} />}
    </div >
  );
}

export default App;
