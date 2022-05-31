const ADD_ITEMS_CART = 'ADD_ITEMS_CART'
const CLEAR_CART = 'CLEAR_CART'
const REMOVE_PRODUCT_CARD = 'REMOVE_PRODUCT_CARD'
const PLUS_PRODUCT_CARD = 'PLUS_PRODUCT_CARD'
const MINUS_PRODUCT_CARD = 'MINUS_PRODUCT_CARD'

export const addItemsToCart = (value: any) => ({
  type: ADD_ITEMS_CART,
  payload: value
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const removeProductCard = (id: any) => ({
  type: REMOVE_PRODUCT_CARD,
  payload: id
})

export const plusProductCard = (id: any) => ({
  type: PLUS_PRODUCT_CARD,
  payload: id
})

export const minusProductCard = (id: any) => ({
  type: MINUS_PRODUCT_CARD,
  payload: id
})