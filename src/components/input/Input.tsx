import React, { FC } from 'react'
import style from './Input.module.scss'

interface InputProps {
  label: string,
  type: string,
  value?: string,
  onChange?: any
}


const Input: FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div className={style.root}>
      <input type={type} required value={value} onChange={(e) => onChange(e)} />
      <label >{label}</label>
    </div>
  )
}

export default Input