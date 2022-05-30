import React, { FC } from 'react'
import { Btn } from '../'

import style from './Item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface ItemProps {
  id: number,
  imageUrl: string,
  name: string,
  colors: Array<string>,
  price: number,
  sizes: Array<Number>,
  label: string,
  onAddItems: any
}

const Item: FC<ItemProps> = ({ id, imageUrl, name, colors, price, sizes, label, onAddItems }) => {
  const sizesArray: Array<string> = ["M", "L", "XL"]
  // const num = sizes[0]
  const [activeSize, setActiveSize] = React.useState<any>(sizes[0])
  const hendleClickSize = (i: number): void => {
    setActiveSize(i)
  }
  const handleAddItems = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      colors,
      size: sizesArray[activeSize]
    }
    onAddItems(obj)
  }

  return (
    <div className={style.item}>
      {label && <div className={style.item__label}>{label}</div>}
      <img src={imageUrl} alt="" />
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
        <div onClick={handleAddItems}>
          <Btn red><FontAwesomeIcon icon={faPlus} /></Btn>
        </div>
      </div>
      {/* <MyLoader /> */}
    </div>
  )
}

export default Item
