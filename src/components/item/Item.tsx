import React, { FC } from 'react'
import { Btn } from '../'

import style from './Item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import imgTest from '../../assets/images/1.jpg'

interface ItemProps {
  imageUrl: string,
  name: string,
  colors: Array<string>,
  price: number,
  sizes: Array<Number>,
  label: string
}

const Item: FC<ItemProps> = ({ imageUrl, name, colors, price, sizes, label }) => {
  const sizesArray: Array<string> = ["M", "L", "XL"]
  // const num = sizes[0]
  const [activeSize, setActiveSize] = React.useState<any>(sizes[0])
  const hendleClickSize = (i: number): void => {
    setActiveSize(i)
  }
  return (
    <div className={style.item}>
      {label && <div className={style.item__label}>{label}</div>}
      <img src={imgTest} alt="" />
      <h2>{name}</h2>
      <span className={style.item__text}>Цвет: {colors}</span>
      <ul className={style.item__selector}>
        {sizesArray.map((size, i) => {
          return <li key={size} onClick={() => hendleClickSize(i)}
            className={`${activeSize === i ? `${style.active}` : ''} ${!sizes.includes(i) ? `${style.disabled}` : ''}`}>{size}</li>
        })}
      </ul>
      <div className={style.item__footer}>
        <span className={style.item__price}>{price} ₽</span>
        <Btn red><FontAwesomeIcon icon={faPlus} /></Btn>
      </div>
      {/* <MyLoader /> */}
    </div>
  )
}

export default Item
