import React from 'react'

import style from './CartPage.module.scss'
import ProductCard from '../../components/productCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeProductCard, plusProductCard, minusProductCard } from '../../store/actions/cart'




const CartPage = () => {

  const { totalPrice, itemsCount, items } = useSelector(({ cart }: any) => cart)
  const products = Object.keys(items).map(key => {
    return items[key].items[0]
  })

  const dispatch = useDispatch()


  const onRemoveItem = (id: any) => {
    dispatch(removeProductCard(id))
  }

  const onPlusItem = (id: any) => {
    dispatch(plusProductCard(id))
  }

  const onMinusItem = (id: any) => {
    dispatch(minusProductCard(id))
  }
  return (
    <div className={style.cart}>
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
    </div>
  )
}

export default CartPage