import { ADD_PRODUCT, DELETE_PRODUCT , UPDATE_PRODUCT} from "./constant";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});

export const updateProduct = (id) => ({
  type: UPDATE_PRODUCT,
  id,
})
