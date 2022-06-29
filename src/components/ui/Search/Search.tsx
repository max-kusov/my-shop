import React, { FC } from 'react'

import { useDispatch } from 'react-redux'
import { setSearchValue } from '../../../store/slices/filterSlice'

import debounce from 'lodash.debounce'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

import styles from './Search.module.scss'


const Search: FC = () => {
  const dispatch = useDispatch()

  const [searchActive, setSearchActive] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>('')

  const openSearch = () => !searchActive ? setSearchActive(true) : false

  const updateSearchValue = React.useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value))
    }, 500), []
  )

  const closeSearch = () => {
    setValue('')
    dispatch(setSearchValue(''))
    setSearchActive(false)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const activeClass = searchActive ? `${styles.root} ${styles.active}` : `${styles.root}`

  return (
    <div className={activeClass} onClick={() => openSearch()} >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder='ПОИСК'
        value={value}
        onChange={onChange} />
      <FontAwesomeIcon icon={faXmark} className={styles.close} onClick={() => closeSearch()} />
    </div>
  )
}

export default Search