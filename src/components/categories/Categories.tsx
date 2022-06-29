import React, { FC } from 'react'
import Btn from '../ui/Btn/Btn'

import style from './Categories.module.scss'

interface CategoriesProps {
  activeCategory: number,
  onClickItem: (arg: number) => void
}

const items = ['Все', 'Футболки', 'Худи', 'Штаны', 'Сумки']

const Categories: FC<CategoriesProps> = React.memo(({ activeCategory, onClickItem }) => {
  const onSelectActive = (i: number | null): boolean => activeCategory === i ? true : false

  return (
    <ul className={style.categories}>
      {items.map((item, i) =>
        <li onClick={() => onClickItem(i)} key={i} >
          <Btn text={item} red={onSelectActive(i)} />
        </li>)}
    </ul>
  )
})

export default Categories