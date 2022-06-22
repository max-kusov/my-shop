import React from 'react'

import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <span>🥺</span>
      <h1>Ничего не найдено</h1>
      <p>К сожалению данная страница отсутствует в нашем магазине</p>
    </div>
  )
}

export default NotFound