import React from 'react'
import ProductCard from '../productCard/ProductCard'
import Btn from '../ui/btn/Btn'
import style from './Cart.module.scss'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Cart = ({ setCart }: any) => {
  const { totalPrice, itemsCount, items } = useSelector(({ cart }: any) => cart)
  const products = Object.keys(items).map(key => {
    return items[key][0]
  })

  const closeCart = () => {
    setCart(false)
  }

  const randomNumber = () => Math.floor(Math.random() * 5000) // нужен ли?

  return (
    <div className={style.cart}>
      <div className={style.blur}>
        <FontAwesomeIcon icon={faXmark} className={style.close} onClick={closeCart} />
        <ul>
          {products.map((obj, i) => {
            return <li key={i}><ProductCard {...obj} /></li>
          })}
        </ul>

        <div className={style.order}>
          <div className={style.order__info}>
            <span>Номер заказа: {randomNumber()}</span>
            <span> 26-05-2022</span>
          </div>
          <div className={style.order__info}>
            <span>Количество: {itemsCount}</span>
            <span>Итого: {totalPrice}руб</span>
          </div>
          <Btn text='Оформить заказ' green />
        </div>
      </div>
    </div>
  )
}

export default Cart