import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'

import style from './Sort.module.scss'

interface propsSort {
  items: Array<any>,
  activeItem: any,
  onSelectSort: any
}

const Sort: FC<propsSort> = React.memo(({ items, activeItem, onSelectSort }) => {
  const [state, setState] = React.useState<boolean>(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const activeName = items.find((obj) => obj.type === activeItem).name

  const togglePopup = (): void => {
    setState(!state)
  }

  const onClickListItem = (item: any) => {
    onSelectSort(item)
    setState(!state)
  }

  const handleClick = (e: any): void => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setState(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [])

  return (
    <div ref={sortRef} className={style.root}>
      <div className={style.label} onClick={togglePopup}>
        <FontAwesomeIcon icon={faAngleDown} className={state ? `${style.rotated}` : ''} />
        <span> Сортировать по: <b>{activeName}</b></span>
      </div>
      {state && <div className={style.popup}>
        <ul>
          {items && items.map((item: any, i: any) => {
            return <li
              className={activeItem === item.type ? `${style.active}` : ''}
              onClick={() => onClickListItem(item.type)}
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