import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

export const { setCategory, setSort, setPageCount, setFilters } = filterSlice.actions

export default filterSlice.reducer 