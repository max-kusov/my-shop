import React, { FC } from 'react'

import style from './ProductCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

import { addItem, minusItem, removeItem } from '../../store/slices/cartSlice'

interface ProductProps {
  id: number,
  name: string,
  imageUrl: string,
  size: string,
  price: number,
  color: string,
  count: number
}
const ProductCard: FC<ProductProps> = ({ id, name, imageUrl, size, price, color, count }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem({ id }))
  }
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className={style.card}>
      <img src={imageUrl} alt="" />
      <div className={style.card__info}>
        <div className={style.card__description}>
          <div>
            <p>{name}</p>
            <span>Color: {color}</span>
            <span>Size: {size}</span>
          </div>
          <FontAwesomeIcon icon={faXmark}
            className={style.card__close}
            onClick={onClickRemove}
          />
        </div>
        <div className={style.card__footer}>
          <div className={style.card__amount}>
            <div className={style.card__btn}
              onClick={onClickMinus}
            >-</div>
            <span>{count}</span>
            <div className={style.card__btn}
              onClick={onClickPlus}
            >+</div>
          </div>
          <div className={style.card__price}>
            {price * count}руб
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard