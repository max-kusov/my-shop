import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import style from './Sort.module.scss'

interface propsSort {
  items: Array<string>
}

const Sort: FC<propsSort> = ({ items }) => {
  const [state, setState] = React.useState<boolean>(false)
  const [activeItem, setActiveItem] = React.useState<number>(0)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const activeName = items[activeItem]

  const togglePopup = () => {
    setState(!state)
  }

  const handleClick = (e: any) => {
    if (!e.path.includes(sortRef.current)) {
      setState(false)
    }
  }
  const onSelectItem = (i: number) => {
    setActiveItem(i)
    setState(false)
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleClick)
  }, [])

  return (
    <div ref={sortRef} className={style.sort}>
      <div className={style.sort__label} onClick={togglePopup}>
        <FontAwesomeIcon icon={faAngleDown} className={state ? `${style.sort__rotated}` : ''} />
        <span> Сортировать по: {activeName}</span>
      </div>
      {state && <div className={style.sort__popup}>
        <ul>
          {items && items.map((item, i) => {
            return <li className={activeItem === i ? `${style.sort__active}` : ''}
              onClick={() => onSelectItem(i)} key={i}>{item}</li>
          })}
        </ul>
      </div>}
    </div>
  )
}

export default Sort