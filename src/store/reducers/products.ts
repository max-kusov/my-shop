const initState = {
  items: [],
  isLoaded: false
}

const products = (state = initState, action: any) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state;
  }
}

export default products