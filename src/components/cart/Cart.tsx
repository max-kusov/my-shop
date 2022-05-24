import React from 'react'
import ProductCard from '../productCard/ProductCard'
import Btn from '../ui/btn/Btn'
import style from './Cart.module.scss'

const Cart = () => {
  return (
    <div className={style.cart}>
      <div className={style.blur}>
        <ul>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>

        </ul>

        <div className={style.order}>
          <div className={style.order__info}>
            <span>Номер заказа: 5423223</span>
            <span>05-12-2019</span>
          </div>
          <div className={style.order__info}>
            <span>Количество: 3</span>
            <span>Итого: 5000руб</span>
          </div>
          <Btn text='Оформить заказ' green />
        </div>
      </div>
    </div>
  )
}

export default Cart