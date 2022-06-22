import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'

import style from './TabBar.module.scss'
import { NavLink } from 'react-router-dom'

import { ShowCart } from '../../App'


const TabBar = () => {
  console.log('rerender tab')

  const { setCart } = React.useContext(ShowCart)
  const openCart = () => setCart(true)
  const [active, setActive] = React.useState(0)
  const handleBtn = () => {
    setActive()
  }

  return (
    <div className={style.tab}>
      <div className={style.icons}>
        <NavLink to="/" className={style.l}>
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <FontAwesomeIcon icon={faCartShopping} onClick={openCart} />

        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUser} />

      </div>
    </div>
  )
}

export default TabBar