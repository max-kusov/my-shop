import React, { FC } from 'react'

import style from './ProductCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// import img from '../../../public/img/1.jpg'

interface ProductProps {
  id: number,
  name: string,
  imageUrl: string,
  size: string,
  price: number,
  color: string,
  totalPrice: any,
  totalCount: number,
  onRemoveItem: any,
  onPlusItem: any,
  onMinusItem: any
}
const ProductCard: FC<ProductProps> = ({ id, name, imageUrl, size, price, color, totalPrice, totalCount, onRemoveItem, onPlusItem, onMinusItem }) => {
  const handleRemove = () => {
    onRemoveItem(id)
  }
  const handlePlus = () => {
    onPlusItem(id)
  }
  const handleMinus = () => {
    onMinusItem(id)
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
            onClick={handleRemove}
          />
        </div>
        <div className={style.card__footer}>
          <div className={style.card__amount}>
            <div className={style.card__btn}
              onClick={handleMinus}
            >-</div>
            <span>{totalCount}</span>
            <div className={style.card__btn}
              onClick={handlePlus}
            >+</div>
          </div>
          <div className={style.card__price}>
            {totalPrice}руб
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard