import React, { FC } from 'react'
import Btn from '../btn/Btn'

import style from './Item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItem } from '../../store/slices/cartSlice'
import { addItemMarks, toggleMark } from '../../store/slices/marksSlice'

interface ItemProps {
  id: number,
  imageUrl: string,
  name: string,
  colors: string[],
  price: number,
  sizes: number[],
  label?: string,
  markIcon: boolean // нужен или нет?????
}

const Item: FC<ItemProps> = ({ id, imageUrl, name, colors, price, sizes, label, markIcon }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItem(id))

  const sizesArray: string[] = ["M", "L", "XL"]
  const [activeSize, setActiveSize] = React.useState<number>(sizes[0])
  const [active, setActive] = React.useState(false)

  const hendleClickSize = (i: number) => {
    setActiveSize(i)
  }

  const onClickAdd = () => {
    const item = {
      id,
      name,
      imageUrl,
      price,
      colors,
      size: sizesArray[activeSize]
    }
    dispatch(addItem(item))
  }
  const onClickAddMarks = () => {
    const item = {
      id,
      name,
      imageUrl,
      price,
      colors,
      sizes
    }
    dispatch(addItemMarks(item))
    setActive(!active)
  }

  const activeMark = active ? `${style.heart} ${style.active}` : `${style.heart}`
  return (
    <div className={style.item}>
      {label && <div className={style.item__label}>{label}</div>}
      <img src={imageUrl} alt="" />
      {markIcon && <FontAwesomeIcon icon={faHeart} className={activeMark} onClick={() => onClickAddMarks()} />}
      {/* <FontAwesomeIcon icon={faHeart} className={activeMark} onClick={() => onClickAddMarks()} /> */}
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
        <div style={{ position: 'relative' }} onClick={onClickAdd}>
          <Btn red><FontAwesomeIcon icon={faPlus} /></Btn>
          {cartItem &&
            <div className={style.item__count}><FontAwesomeIcon icon={faCartShopping} /> {cartItem.count} </div>}
        </div>
      </div>
    </div>
  )
}

export default Item
