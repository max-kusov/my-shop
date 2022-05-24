import React from 'react'
import Btn from '../../components/ui/btn/Btn'
import { Link } from 'react-router-dom'

import style from './CartPage.module.scss'
import ProductCard from '../../components/productCard/ProductCard'
import { Item } from '../../components'


const CartPage = () => {
  return (
    <div className={style.cart}>
      <h1>My Bag</h1>
      <ul>
        <li>
          {<ProductCard />}
          {<ProductCard />}
          {<ProductCard />}

        </li>
      </ul>
      <div className={style.cart__footer}>
        <Link to='/'>
          <Btn text={'вернуться назад'} />
        </Link>
        <Btn text={'оформить заказ'} red />
      </div>
    </div>
  )
}

export default CartPage