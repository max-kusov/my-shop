import React, { FC } from 'react'

import { Btn } from '../'

import style from './Categories.module.scss'

interface PropsCategories {
  activeCategory: any,
  items: Array<string>,
  onClickItem: any
}

const Categories: FC<PropsCategories> = React.memo(({ activeCategory, items, onClickItem }) => {

  const onSelectActive = (i: number | null): boolean => activeCategory === i ? true : false
  console.log(typeof (activeCategory))
  return (
    <ul className={style.categories}>
      {/* <li
        className={activeCategory === null ? 'active' : ''}
        onClick={() => onClickItem(null)}>
        <Btn text={'Все'} red={onSelectActive(null)} />
      </li> */}
      {items.map((item, i) =>
        <li onClick={() => onClickItem(i)} key={i} >
          <Btn text={item} red={onSelectActive(i)} />
        </li>)}
    </ul>
  )
})

export default Categories