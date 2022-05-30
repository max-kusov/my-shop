const ADD_ITEMS_CART = 'ADD_ITEMS_CART'

export const addItemsToCart = (value: any) => ({
  type: ADD_ITEMS_CART,
  payload: value
})