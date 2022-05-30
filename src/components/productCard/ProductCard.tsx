import React, { FC } from 'react'

import style from './ProductCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

// import img from '../../../public/img/1.jpg'

interface ProductProps {
  name: string,
  imageUrl: string,
  size: string,
  price: number,
  color: string,
  totalPrice: any,
  totalCount: number
}
const ProductCard: FC<ProductProps> = ({ name, imageUrl, size, price, color, totalPrice, totalCount }) => {
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
          <FontAwesomeIcon icon={faXmark} className={style.card__close} />
        </div>
        <div className={style.card__footer}>
          <div className={style.card__amount}>
            <div className={style.card__btn}>-</div>
            <span>{totalCount}</span>
            <div className={style.card__btn}>+</div>
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