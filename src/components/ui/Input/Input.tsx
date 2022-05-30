import React, { FC } from 'react'

import style from './Input.module.scss'

interface InputProps {
  type?: string,
  placeholder: string,
}
const Input: FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={style.input} />
  )
}

export default Input