import { ADD_PRODUCT, DELETE_PRODUCT , UPDATE_PRODUCT} from "./constant";

export const initState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const products = [...state.products, action.product];
      // Save data to localStorage
      localStorage.setItem("products", JSON.stringify(products));
      return {
        ...state,
        products: products,
      };
    case DELETE_PRODUCT:
      const productDelete = state.products.filter(
        (product) => product.id !== action.id
      );
      localStorage.setItem("products", JSON.stringify(productDelete));
      return {
        ...state,
        products: productDelete,
      };

      case UPDATE_PRODUCT:
        const updateProduct = action.id;
        const updateProducts = state.products.map((product) => {
          if(product.id === updateProduct.id){
            return updateProduct;
          }
          return product;
        })
        localStorage.setItem("products", JSON.stringify(updateProducts));
        return {
          ...state,
          products: updateProducts,
        }

    default:
      return state;
  }
}

export default reducer;