import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

import style from './TabBar.module.scss'
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../store/slices/cartSlice'


const TabBar = () => {
  const dispatch = useDispatch()
  const { items, totalCount } = useSelector((state) => state.cart)

  const openCart = () => dispatch(toggleCart(true))

  return (
    <div className={style.tab}>
      <div className={style.icons}>
        <NavLink to="/" >
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <div className={style.cart}>
          <FontAwesomeIcon icon={faCartShopping} onClick={openCart} />
          {items.length > 0 && <div className={style.count}>{totalCount}</div>}
        </div>

        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />

      </div>
    </div>
  )
}

export default TabBar