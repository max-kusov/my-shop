import React from 'react'
import Btn from '../../components/ui/btn/Btn'
import { Link } from 'react-router-dom'

import style from './CartPage.module.scss'

const CartPage = () => {
  return (
    <div className={style.cart}>
      <div className={style.cart__header}>
        <h1>Корзина</h1>
        <span>Очистить корзину</span>
      </div>
      <ul className={style.cart__list}>
        <li className={style.cart__item}>Что то</li>
        <li className={style.cart__item}>Что то</li>
      </ul>
      <div>Сумма заказа 566руб</div>
      <div className={style.cart__footer}>
        <Link to='/'>
          <Btn text={'вернуться назад'} />
        </Link>
        <Btn text={'оформить заказ'} black />
      </div>
    </div>
  )
}

export default CartPage