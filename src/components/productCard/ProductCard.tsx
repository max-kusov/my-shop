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
  color: string
}
const ProductCard: FC<ProductProps> = ({ name, imageUrl, size, price, color }) => {
  // const { totalPrice, itemsCount, items } = useSelector(({ cart }: any) => cart)
  return (
    <div className={style.card}>
      {/* <div className={style.card__img}></div> */}
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
            <span>1</span>
            <div className={style.card__btn}>+</div>
          </div>
          <div className={style.card__price}>
            {price}руб
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard