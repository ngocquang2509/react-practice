import { KEY, PRODUCT } from '../constants'
import { saveLocalStorage } from '../helpers'

export const initState = {
  products: JSON.parse(localStorage.getItem(KEY)) || [],
  filterList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case PRODUCT.ADD:
      const addProduct = [...state.products, action.product]
      // Save data to localStorage
      saveLocalStorage(addProduct)
      return {
        ...state,
        products: addProduct
      }
    case PRODUCT.DELETE:
      const deleteProduct = state.products.filter(product => product.id !== action.id)
      // Delete data from localStorage
      saveLocalStorage(deleteProduct)
      return {
        ...state,
        products: deleteProduct
      }

    case PRODUCT.UPDATE:
      const updateProduct = action.product
      const updateProducts = state.products.map(product => {
        if (product.id === updateProduct.id) {
          return updateProduct
        }
        return product
      })
      // Update data from localStorage
      saveLocalStorage(updateProducts)
      return {
        ...state,
        products: updateProducts
      }
    default:
      return state
  }
}

export default reducer
