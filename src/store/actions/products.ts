import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_LOADED = 'SET_LOADED'

export const setLoaded = (payload: boolean) => ({
  type: SET_LOADED,
  payload,
})

export const fetchProducts = (sortBy: any, category: any, currentPage: any) => (dispatch: any) => {
  dispatch(setLoaded(false))
  axios.get(`/products?_page=${currentPage}&_limit=4&${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`)
    .then(({ data }) => {
      dispatch(setProducts(data))
    })
}

export const setProducts = (items: any) => ({
  type: SET_PRODUCTS,
  payload: items
})
