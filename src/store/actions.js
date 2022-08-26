import { ADD_PRODUCT } from "./constant";

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
