import React, { FC } from 'react'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import style from './Header.module.scss'
import Search from '../ui/Search/Search'
// import { ShowCart } from '../../App'
import { selectCart, toggleCart } from '../../store/slices/cartSlice'



interface HeaderProps {
  // searchValue: string,
  // setSearchValue: any
}
//{ searchValue, setSearchValue }
const Header: FC<HeaderProps> = () => {
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
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Главная</span>
          <Search />
        </div>
      </div>
    </header >
  )
}

export default Header 