import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  FILTER_LIST,
} from "./constant";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

export const searchProduct = (name) => ({
  type: SEARCH_PRODUCT,
  name,
});

export const filterList = (category) => ({
  type: FILTER_LIST,
  category,
});
