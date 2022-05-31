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

  const getTotalPrice = (arr: any) => arr.reduce((sum: any, item: any) => item['price'] + sum, 0)

  switch (action.type) {

    case 'ADD_ITEMS_CART':
      {
        const currentItems = !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload]


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
    case 'REMOVE_PRODUCT_CARD': {
      const newProduct = {
        ...state.items
      }
      const currentTotalPrice = newProduct[action.payload].totalPrice
      const currentItemsCount = newProduct[action.payload].items.length

      delete newProduct[action.payload]
      return {
        ...state,
        items: newProduct,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentItemsCount,

      }
    }
    case 'PLUS_PRODUCT_CARD': {
      const newItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]
      const newObj = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems)
        }
      }

      const currentTotalPrice = newObj[action.payload].totalPrice
      const currentItemsCount = newObj[action.payload].items.length
      return {
        ...state,
        items: newObj,
        totalPrice: currentTotalPrice,
        itemsCount: currentItemsCount
      }
    }
    case 'MINUS_PRODUCT_CARD': {
      const oldItems = state.items[action.payload].items
      const newItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems

      const newObj = {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems)
        }
      }
      const currentTotalPrice = newObj[action.payload].totalPrice
      const currentItemsCount = newObj[action.payload].items.length
      return {
        ...state,
        items: newObj,
        totalPrice: currentTotalPrice,
        itemsCount: currentItemsCount
      }
    }

    default:
      return state;
  }
}

export default cart 