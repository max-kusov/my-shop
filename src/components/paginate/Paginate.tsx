import React, { FC } from 'react'

import ReactPaginate from 'react-paginate';

import style from './Paginate.module.scss'

interface PaginateProps {
  value: number,
  onChangePage: (arg: number) => void
}

const Paginate: FC<PaginateProps> = ({ value, onChangePage }) => {
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