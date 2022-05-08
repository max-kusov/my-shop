import React, { FC } from 'react'
import Btn from '../ui/btn/Btn'

import style from './Cart.module.scss'

const Cart: FC = () => {
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
        <Btn text={'вернуться назад'} />
        <Btn text={'оформить заказ'} />
      </div>
    </div>
  )
}

export default Cart