import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import products from './slices/productSlice'

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export const store = configureStore({
  reducer: {
    filter,
    products
  },
})


// export default store