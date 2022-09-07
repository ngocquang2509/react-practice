import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SEARCH_PRODUCT,
  FILTER_LIST,
} from "./constant";

export const initState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  filterList: [],
};

console.log("abc", initState.products);

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
      const updateProduct = action.product;
      const updateProducts = state.products.map((product) => {
        if (product.id === updateProduct.id) {
          return updateProduct;
        }
        return product;
      });
      localStorage.setItem("products", JSON.stringify(updateProducts));
      return {
        ...state,
        products: updateProducts,
      };

    case SEARCH_PRODUCT:
      return {
        ...state,
        filterList: state.products.filter(
          (product) =>
            product.productName
              .toLowerCase()
              .search(action.name.toLowerCase().trim()) !== -1
        ),
      };

    case FILTER_LIST:
      const filter = action.category;
      const filterList = state.products.filter((item) =>
        filter.includes(item.category)
      );
      return {
        ...state,
        filterList: filterList,
      };
    default:
      return state;
  }
};

export default reducer;
