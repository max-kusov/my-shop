import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

import styles from './Search.module.scss'

interface SearchProps {
  searchValue: string,
  setSearchValue: any
}

const Search: FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  const clearChange = () => {
    setSearchValue('')
  }
  return (
    <div className={styles.search}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      <input onChange={onChange} value={searchValue} className={styles.input} placeholder='Поиск' />
      {searchValue && <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} onClick={clearChange} />}
    </div>
  )
}

export default Search