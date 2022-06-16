import React, { FC } from 'react'
import logo from '../../assets/images/logo.png'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faAngleLeft, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

import style from './Header.module.scss'
import Search from '../ui/Search/Search'

interface HeaderProps {
  searchValue: string,
  setSearchValue: any,
  setCart: any
}
const Header: FC<HeaderProps> = ({ searchValue, setSearchValue, setCart }) => {
  const [searchActive, setSearchActive] = React.useState(false)
  const { itemsCount } = useSelector(({ cart }: any) => cart)
  const openCart = () => setCart(true)

  // временно 
  const handleSearch = () => {
    if (!searchActive) {
      setSearchActive(true)
    }
  }
  const closeSearch = () => {
    setSearchActive(false)

  }

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header__wrapper}>
          <Link to='/'>
            <img src={logo} alt="logo" className={style.logo} />
          </Link>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className={style.icons}>
            <Link to='/profile'>
              <FontAwesomeIcon icon={faUser} className={style.iconProfile} />
            </Link>
            <div className={style.header__test} onClick={openCart}>
              <FontAwesomeIcon className={style.header__cart} icon={faCartShopping} />
              <div className={style.header__label}>{itemsCount}</div>
            </div>
          </div>
        </div>
        <div className={style.header__mobile}>
          <FontAwesomeIcon icon={faAngleLeft} />
          <span>Главная</span>
          <div className={searchActive ? `${style.search} ${style.active}` : `${style.search}`} onClick={() => handleSearch()} >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder='ПОИСК' />
            <FontAwesomeIcon icon={faXmark} className={style.close} onClick={() => closeSearch()} />

          </div>
        </div>
      </div>
    </header >
  )
}

export default Header 