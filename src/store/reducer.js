import { ADD_PRODUCT } from "./constant";

const initState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const products = [...state.products, action.product];
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
