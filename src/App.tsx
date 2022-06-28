import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom'
// import { useDispatch } from 'react-redux';

import { Btn, Header } from './components';
import { Home } from './pages/'
// import { fetchProducts } from './store/actions/products';

import Cart from './components/cart/Cart'
import TabBar from './components/tabBar/TabBar';
import NotFound from './pages/NotFound/NotFound';
import { useSelector } from 'react-redux';
import { selectCart } from './store/slices/cartSlice';

// export const ShowCart = React.createContext({})

// export const searchContext = React.createContext()


const App: FC = () => {


  // const [cart, setCart] = React.useState(false)
  // const [searchValue, setSearchValue] = React.useState('')
  const { showCart } = useSelector(selectCart)


  //searchValue={searchValue} setSearchValue={setSearchValue} 
  return (
    < div >
      {/* <ShowCart.Provider value={{ cart, setCart }}> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/cart' element={<CartPage />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes >
      <TabBar />
      {showCart && <Cart />}
      {/* </ShowCart.Provider> */}
    </div >
  );
}

export default App;
