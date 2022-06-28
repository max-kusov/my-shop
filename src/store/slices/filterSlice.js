import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  category: 0,
  pageCount: 1,
  sortBy: 'popular'
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sortBy = action.payload
    },
    setPageCount(state, action) {
      state.pageCount = action.payload
    },
    setFilters(state, action) {
      state.category = +action.payload.category
      state.pageCount = +action.payload.pageCount
      state.sortBy = action.payload.sortBy
    }
  }
})

export const selectFilter = (state) => state.filter

export const { setCategory, setSearchValue, setSort, setPageCount, setFilters } = filterSlice.actions

export default filterSlice.reducer 