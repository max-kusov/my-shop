import React, { FC } from 'react'

import style from './Btn.module.scss'

interface BtnProps {
  red?: boolean,
  green?: boolean,
  text?: string,
  children?: React.ReactNode
}

const Btn: FC<BtnProps> = ({ red, text, children, green }) => {
  return (
    <button
      className={`${style.btn} ${red ? style.btn__red : ''} ${green ? style.btn__green : ''}`}>
      {text || children}
    </button>
  )
}

export default Btn