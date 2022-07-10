import { createSlice } from '@reduxjs/toolkit'


// interface marksSliceState {
//   totalCount: number,
//   items: any
// }

const initialState = {
  totalCountMarks: 0,
  items: [],
  activeMark: false
}

const marksSlice = createSlice({
  name: 'marks',
  initialState,
  reducers: {
    addItemMarks(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      findItem ? findItem.count = 1 :
        state.items.push({
          ...action.payload,
          count: 1
        })
      state.totalCountMarks = state.items.reduce((sum, obj) => obj.count + sum, 0)
    },
    clearMarks(state) {
      state.items = []
      state.totalCountMarks = 0
    },
    toggleMark(state, action) {
      state.activeMark = action.payload
    }
  }
})

export const { addItemMarks, clearMarks, toggleMark } = marksSlice.actions

export default marksSlice.reducer 