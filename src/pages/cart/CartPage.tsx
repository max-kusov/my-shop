import React from 'react'
import Btn from '../../components/ui/btn/Btn'
import { Link } from 'react-router-dom'

import style from './CartPage.module.scss'
import ProductCard from '../../components/productCard/ProductCard'
import { Item } from '../../components'
import Input from '../../components/ui/Input/Input'


const CartPage = () => {
  return (
    <div className={style.cart}>
      <h1>Sign up</h1>
      <form>
        <Input type={'text'} placeholder={'Name'} />
        <Input type={'email'} placeholder={'Email'} />
        <Input type={'password'} placeholder={'Password'} />
      </form>
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