import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import style from './Sort.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setSort } from '../../store/slices/filterSlice'

interface SortItem {
  name: string,
  type: string
}

const items: SortItem[] = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' }
]

const Sort: FC = React.memo(() => {
  const dispatch = useDispatch()
  const { sortBy } = useSelector(selectFilter)
  const sortRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState<boolean>(false)


  const togglePopup = () => {
    setOpen(!open)
  }

  const onClickListItem = (item: SortItem) => {
    dispatch(setSort(item))
    setOpen(!open)
  }

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let path = (e.composedPath && e.composedPath());
      if (sortRef.current && !path.includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [])

  return (
    <div ref={sortRef} className={style.root}>
      <div className={style.label} onClick={togglePopup}>
        <FontAwesomeIcon icon={faAngleDown} className={open ? `${style.rotated}` : ''} />
        <span> Сортировать по: <b>{sortBy.name}</b></span>
      </div>
      {open && <div className={style.popup}>
        <ul>
          {items && items.map((item, i) => {
            return <li
              className={sortBy.type === item.type ? `${style.active}` : ''}
              onClick={() => onClickListItem(item)}
              key={i}>
              {item.name}
            </li>
          })}
        </ul>
      </div>}
    </div>
  )
})

export default Sort