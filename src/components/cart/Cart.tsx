import React, { FC } from 'react'
import ProductCard from '../productCard/ProductCard'
import Btn from '../btn/Btn'

import { useDispatch, useSelector } from 'react-redux'
import { clearCart, selectCart, toggleCart } from '../../store/slices/cartSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons'

import style from './Cart.module.scss'

const Cart: FC = () => {

  const dispatch = useDispatch()

  const { totalPrice, totalCount, items } = useSelector(selectCart)

  const closeCart = () => {
    dispatch(toggleCart(false))
  }

  const onClearCart = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearCart())
    }
  }
  const openForm = () => {
    console.log('hello')
  }

  return (
    <div className={style.cart}>
      <div className={style.blur}>
        <FontAwesomeIcon icon={faXmark} className={style.close} onClick={closeCart} />
        <div className={style.cart__header}>
          <h3>Корзина</h3>
          <div className={style.clear} onClick={onClearCart}>
            <FontAwesomeIcon icon={faTrash} />
            <span>очистить корзину</span>
          </div>
        </div>
        <ul>
          {items.map((obj: any, i: number) => {
            return <li key={i}><ProductCard
              {...obj}
            /></li>
          })}
        </ul>

        <div className={style.order}>
          <div className={style.order__info}>
            <span>Номер заказа: 0001</span>
            <span> 26-05-2022</span>
          </div>
          <div className={style.order__info}>
            <span>Количество: {totalCount}</span>
            <span>Итого: {totalPrice}руб</span>
          </div>
          <div onClick={openForm}>
            <Btn text='Оформить заказ' green />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart