const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'
export const setSortBy = (value: any) => ({
  type: SET_SORT_BY,
  payload: value
})

export const setCategory = (index: any) => ({
  type: SET_CATEGORY,
  payload: index
})

