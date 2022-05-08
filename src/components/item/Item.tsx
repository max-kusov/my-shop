import React, { FC } from 'react'
import { Btn } from '../'

import style from './Item.module.scss'

interface ItemProps {
  url: string,
}

const Item: FC<ItemProps> = ({ url }) => {
  return (
    <div className={style.item}>
      <img src={url} alt="" />
      <h2>Футболка СК</h2>
      <span className={style.item__text}>Цвет: Синий</span>
      <ul className={style.item__colors}>
        <li className={style.item__color} style={{ background: 'rgb(12, 2, 77)' }}></li>
        <li className={style.item__color} style={{ background: 'grey' }}></li>
      </ul>
      <ul className={style.item__selector}>
        <li className={style.active}>M</li>
        <li>L</li>
        <li>XL</li>
      </ul>
      <span className={style.item__price}>99руб.</span>
      <Btn text={'Добавить'} />
    </div>
  )
}

export default Item