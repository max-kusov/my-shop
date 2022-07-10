import React, { FC } from 'react'

import style from './Form.module.scss'
import Input from '../../components/input/Input'
import Btn from '../../components/btn/Btn'

const Form: FC = () => {
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(JSON.stringify('hello'))
  }
  const [value, setValue] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  // const user = {
  //   name: name.value,
  //   address: address.value,
  //   email: email.value,
  //   phone: phone.value,
  // }

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <Input label='ФИО' type='text' value={value} onChange={onChange} />
      <Input label='Адрес' type='text' />
      <Input label='Телефон' type='number' />
      <Input label='Email' type='email' />
      <input className={style.submit} type="submit" />
    </form >
  )
}

export default Form