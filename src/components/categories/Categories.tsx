import React, { FC } from 'react'

import { Btn } from '../'

import style from './Categories.module.scss'

interface PropsCategories {
  // onClick: (item: string) => void,
  items: Array<string>,
}

const Categories: FC<PropsCategories> = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(0)
  const onSelectItem = (i: any) => activeItem === i ? true : false

  return (
    <ul className={style.categories}>
      {items.map((item, i) => <li onClick={() => setActiveItem(i)} key={i} >
        <Btn text={item} black={onSelectItem(i)} />
      </li>)}
    </ul>
  )
}

export default Categories