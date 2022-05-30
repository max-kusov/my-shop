import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'

import style from './Sort.module.scss'

interface propsSort {
  activeItem: any,
  items: Array<any>,
  onClickItem: any
}

const Sort: FC<propsSort> = React.memo(({ activeItem, items, onClickItem }) => {
  const [state, setState] = React.useState<boolean>(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const activeName = items.find((obj) => obj.type === activeItem).name

  const togglePopup = (): void => {
    setState(!state)
  }

  const handleClick = (e: any): void => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) {
      setState(false)
    }
  }
  const onSelectItem = (item: string): void => {
    onClickItem(item)
    setState(false)
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleClick)
  }, [])

  return (
    <div ref={sortRef} className={style.sort}>
      <div className={style.sort__label} onClick={togglePopup}>
        <FontAwesomeIcon icon={faAngleDown} className={state ? `${style.sort__rotated}` : ''} />
        <span> Сортировать по: <b>{activeName}</b></span>
      </div>
      {state && <div className={style.sort__popup}>
        <ul>
          {items && items.map((item, i) => {
            // console.log(item)
            return <li className={activeItem === item.type ? `${style.active}` : ''}
              onClick={() => onSelectItem(item.type)} key={i}>
              {item.name}
              {/* <FontAwesomeIcon icon={faArrowDownShortWide} /> */}
            </li>
          })}
        </ul>
      </div>}
    </div>
  )
})

export default Sort