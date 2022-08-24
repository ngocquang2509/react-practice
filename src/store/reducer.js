import { ADD_PRODUCT } from "./constant";


const listProducts = JSON.parse(localStorage.getItem("Products")) || [];
const initState = {
  products: listProducts
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const products = [...state.products, action.payload];
      localStorage.setItem("Products", JSON.stringify(products));
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
