import React, { FC } from 'react'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'

import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import style from './Header.module.scss'
import Search from '../search/Search'
import { selectCart, toggleCart } from '../../store/slices/cartSlice'



const Header: FC = () => {
  const dispatch = useDispatch()
  const { totalCount } = useSelector(selectCart)
  const openCart = () => dispatch(toggleCart(true))

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header__wrapper}>
          <Link to='/'>
            <img src={logo} alt="logo" className={style.logo} />
          </Link>
          <div className={style.icons}>
            <Link to='/profile'>
              <FontAwesomeIcon icon={faUser} className={style.iconProfile} />
            </Link>
            <div className={style.header__test}>
              <FontAwesomeIcon className={style.header__cart} icon={faCartShopping} onClick={openCart} />
              {totalCount > 0 && <div className={style.header__label}>{totalCount}</div>}
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className={style.header__mobile}>
          <Link to='/'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <Search />
        </div>
      </div>
    </header >
  )
}

export default Header 