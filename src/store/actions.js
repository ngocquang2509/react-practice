import { ADD_PRODUCT, DELETE_PRODUCT } from "./constant";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});
