import React from 'react'

import ReactPaginate from 'react-paginate';

import style from './Paginate.module.scss'

const Paginate = ({ value, onChangePage }) => {
  return (
    <ReactPaginate
      className={style.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={value - 1}
      previousLabel="<"
    />
  )
}

export default Paginate