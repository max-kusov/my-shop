import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import style from './Sort.module.scss'

const Sort: FC = () => {
  const [state, setState] = React.useState(true)

  return (
    <div className={style.sort}>
      <div className={style.sort__label} onClick={() => setState(!state)}>
        <FontAwesomeIcon icon={faAngleUp} />
        <span> Сортировать по: цене</span>
      </div>
      <div className={`${style.sort__popup} ${state ? 'hide' : ''}`}>
        <ul>
          <li className={style.sort__active}>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  )
}

export default Sort