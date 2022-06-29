import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params: any) => {
    const {
      pageCount,
      category,
      sortBy
    } = params
    const { data } = await axios.get(`/products?_page=${pageCount}&_limit=4&${category > 0 ? `category=${category}` : ``}&_sort=${sortBy.type}&_order=asc`)
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading' // success , error
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading'
      state.items = []
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'error'
      state.items = []
    })
  }
})

export const selectProducts = (state: any) => state.products

export const { setProducts } = productSlice.actions

export default productSlice.reducer 