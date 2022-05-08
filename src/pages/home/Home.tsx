import React, { FC } from 'react'
import { Categories, Sort, Item } from '../../components'

import style from './Home.module.scss'
import green from '../../assets/images/1.jpg'
import brown from '../../assets/images/2-2.jpg'
import black from '../../assets/images/2.jpg'

import Slider from '../../components/slider/Slider'


const Home: FC = () => {
  return (
    <>
      <Slider />
      <div className='container'>
        <div className={style.content}>
          <div className={style.content__top}>
            <Categories
              items={['Всё', 'Футболки', 'Худи', 'Штаны']} />
            <Sort />
          </div>
          <div className={style.content__list}>
            <Item url={black} />
            <Item url={green} />
            <Item url={brown} />
            <Item url={black} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home