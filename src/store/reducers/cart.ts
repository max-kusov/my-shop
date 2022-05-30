interface initType {
  items: any,
  totalPrice: number,
  itemsCount: number
}
const initState: initType = {
  items: {},
  totalPrice: 0,
  itemsCount: 0
}

const cart = (state = initState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEMS_CART':
      {
        const obj = {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload]
        }
        const allItems = [].concat.apply([], Object.values(obj))
        const totalPrice = allItems.reduce((sum, item) => item['price'] + sum, 0)
        // console.log(allItems[0])
        return {
          ...state,
          items: obj,
          totalPrice,
          itemsCount: allItems.length
        }
      }


    default:
      return state;
  }
}

export default cart 