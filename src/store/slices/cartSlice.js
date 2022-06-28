import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showCart: false,
  totalPrice: 0,
  totalCount: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.showCart = action.payload
    },
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      findItem ? findItem.count++ : state.items.push({
        ...action.payload,
        count: 1
      })
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--
      }
      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0)
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id != action.payload)

      state.totalCount = state.items.reduce((sum, obj) => obj.count + sum, 0)
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    clearCart(state) {
      state.items = []
      state.totalPrice = 0
      state.totalCount = 0
    },
  }
})

export const selectCart = (state) => state.cart
export const selectCartItem = (id) => (state) => state.cart.items.find((obj) => obj.id === id)

export const { toggleCart, addItem, minusItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer 