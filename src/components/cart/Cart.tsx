import React from 'react'
import ProductCard from '../productCard/ProductCard'
import Btn from '../ui/btn/Btn'
import style from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons'

import { clearCart, removeProductCard, plusProductCard, minusProductCard } from '../../store/actions/cart'


const Cart = ({ setCart }: any) => {
  const dispatch = useDispatch()

  const { totalPrice, itemsCount, items } = useSelector(({ cart }: any) => cart)
  const products = Object.keys(items).map(key => {
    return items[key].items[0]
  })

  const closeCart = () => {
    setCart(false)
  }

  const onClearCart = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearCart())
    }
  }
  const onRemoveItem = (id: any) => {
    dispatch(removeProductCard(id))
  }

  const onPlusItem = (id: any) => {
    dispatch(plusProductCard(id))
  }

  const onMinusItem = (id: any) => {
    dispatch(minusProductCard(id))
  }

  const randomNumber = () => Math.floor(Math.random() * 5000) // нужен ли?

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
          {products.map((obj, i) => {
            return <li key={i}><ProductCard
              {...obj}
              totalPrice={items[obj.id].totalPrice}
              totalCount={items[obj.id].items.length}
              onRemoveItem={onRemoveItem}
              onPlusItem={onPlusItem}
              onMinusItem={onMinusItem}
            /></li>
          })}
        </ul>

        <div className={style.order}>
          <div className={style.order__info}>
            <span>Номер заказа: 0001</span>
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