import React, { FC } from 'react'

import style from './Btn.module.scss'

interface BtnProps {
  red?: boolean,
  green?: boolean,
  text?: string,
  children?: React.ReactNode
}

const Btn: FC<BtnProps> = ({ red, green, text, children }) => {

  return (
    <button
      className={`${style.root} ${red ? style.red : ''} ${green ? style.green : ''}`
      }>
      {text || children}
    </button >
  )
}

export default Btn