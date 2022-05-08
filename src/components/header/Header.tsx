import React, { FC } from 'react'
import logo from '../../assets/skull-solid.svg'
import { Btn } from '../'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

import style from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.header__wrapper}>
          <Link to='/' className={style.header__logo}>
            <img src={logo} alt="logo" />
            <div>
              <h3>My Shop</h3>
              <p>магазин для своих</p>
            </div>
          </Link>
          <Link to='/cart'>
            <Btn>
              <span>{<FontAwesomeIcon icon={faCartArrowDown} />} | 535rub</span>
            </Btn>
          </Link>
        </div>
      </div>
    </header >
  )
}

export default Header 