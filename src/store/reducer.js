import { ADD_PRODUCT } from "./constant";

const listProduct = JSON.parse(localStorage.getItem("products")) || [];
const initState = {
  products: listProduct,
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const products = [...state.products, action.payload];
      localStorage.setItem("products", JSON.stringify(products));
      return {
        ...state,
        products: products,
      };

    default:
      return state;
  }
}

export { initState };
export default reducer;
