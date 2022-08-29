import { ADD_PRODUCT, DELETE_PRODUCT } from "./constant";

//const listProduct = JSON.parse(localStorage.getItem("products")) || [];
const initState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

console.log("item", initState.products);

function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const products = [...state.products, action.payload];
      localStorage.setItem("products", JSON.stringify(products));
      return {
        ...state,
        products: products,
      };
    case DELETE_PRODUCT:
      const productsDelete = state.products.filter(
        (product) => product.id !== action.id
      );
      localStorage.setItem("products", JSON.stringify(productsDelete));
      return {
        ...state,
        products: productsDelete,
      };

    default:
      return state;
  }
}

export { initState };
export default reducer;
