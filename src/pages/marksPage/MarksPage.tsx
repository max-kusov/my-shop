import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../components/item/Item'

import style from './MarksPage.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { clearMarks } from '../../store/slices/marksSlice'

const MarksPage = () => {
  const dispatch = useDispatch()

  const marksItem = useSelector((state: any) => state.marks.items)
  const onClearCart = () => {
    if (window.confirm('Очистить закладки?')) {
      dispatch(clearMarks())
    }
  }

  return (
    <div className='container'>
      <div className={style.clear} onClick={onClearCart}>
        <span>Очистить </span>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div className={style.wrapper}>
        {marksItem.length > 0 ? <div className={style.root}>

          {marksItem.map((item: any) => <Item {...item} key={item.id + item.name} />)}
        </div> :
          <h1>Ваш список пуст🥺</h1>}
      </div>
    </div >
  )
}

export default MarksPage