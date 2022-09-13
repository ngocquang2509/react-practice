import { PRODUCT } from '../constants'

export const addProduct = product => ({
  type: PRODUCT.ADD,
  product
})

export const deleteProduct = id => ({
  type: PRODUCT.DELETE,
  id
})

export const updateProduct = product => ({
  type: PRODUCT.UPDATE,
  product
})

export const filterList = category => ({
  type: PRODUCT.FILTER,
  category
})
