const ADD_ITEMS_CART = 'ADD_ITEMS_CART'
const CLEAR_CART = 'CLEAR_CART'

export const addItemsToCart = (value: any) => ({
  type: ADD_ITEMS_CART,
  payload: value
})

export const clearCart = () => ({
  type: CLEAR_CART
})