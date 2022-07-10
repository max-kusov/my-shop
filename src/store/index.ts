import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import products from './slices/productSlice'
import cart from './slices/cartSlice'
import marks from './slices/marksSlice'

export const store = configureStore({
  reducer: {
    filter,
    products,
    cart,
    marks
  },
})
