import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectCart, toggleCart } from '../../store/slices/cartSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

import style from './TabBar.module.scss'


const TabBar: FC = () => {
  const dispatch = useDispatch()
  const { items, totalCount } = useSelector(selectCart)
  const marksItem = useSelector((state: any) => state.marks.totalCountMarks)


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
        <NavLink to="/marks" >
          <div className={style.cart}>
            <FontAwesomeIcon icon={faHeart} />
            {marksItem > 0 && <div className={style.count}>{marksItem}</div>}
          </div>
        </NavLink>
        <NavLink to="*" >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

      </div>
    </div>
  )
}

export default TabBar