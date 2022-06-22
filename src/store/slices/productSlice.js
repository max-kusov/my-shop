import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isLoaded: false
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload
    },
    setLoaded(state, action) {
      state.isLoaded = action.payload
    }
  }
})

export const { setProducts, setLoaded } = productSlice.actions

export default productSlice.reducer 