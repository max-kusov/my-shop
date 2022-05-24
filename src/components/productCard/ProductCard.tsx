import React from 'react'

import style from './ProductCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import img from '../../assets/images/1.jpg'

const ProductCard = () => {
  return (
    <div className={style.card}>
      {/* <div className={style.card__img}></div> */}
      <img src={img} alt="" />
      <div className={style.card__info}>
        <div className={style.card__description}>
          <div>
            <p>Name</p>
            <span>Color: Black</span>
            <span>Size: XL</span>
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
            530руб
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard