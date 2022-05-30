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
        const currentItems = !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload]

        const getTotalPrice = (arr: any) => arr.reduce((sum: any, item: any) => item['price'] + sum, 0)

        const obj = {
          ...state.items,
          [action.payload.id]: {
            items: currentItems,
            totalPrice: getTotalPrice(currentItems)
          }
        }

        const items = Object.values(obj).map((obj: any) => obj.items)
        const allItems = [].concat.apply([], items)
        const totalPrice = getTotalPrice(allItems)
        // console.log(allItems[0])
        return {
          ...state,
          items: obj,
          totalPrice,
          itemsCount: allItems.length
        }
      }
    case 'CLEAR_CART': {
      return {
        items: {},
        totalPrice: 0,
        itemsCount: 0
      }
    }

    default:
      return state;
  }
}

export default cart 