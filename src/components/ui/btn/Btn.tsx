import React, { FC } from 'react'

import style from './Btn.module.scss'

interface BtnProps {
  black?: boolean,
  text?: string,
  children?: React.ReactNode
}

const Btn: FC<BtnProps> = ({ black, text, children }) => {
  return (
    <button
      className={`${style.btn} ${black ? style.btn__black : ''}`}>
      {text || children}
    </button>
  )
}

export default Btn