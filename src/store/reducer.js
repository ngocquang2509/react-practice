import { ADD_ITEM, SET_ITEM_INPUT, DELETE_ITEM } from "./constant";

const initState = {
  items: [{
    itemName: '',
    itemPrice: '',
    itemCategory: '',
    itemImage: '',
  }],
  itemInput: ''
};

function reducer(state, action) {
  switch (action.type) {
    case SET_ITEM_INPUT:
      return {
        ...state,
        itemInput: action.payload,
      };
    case ADD_ITEM:
      const items = [...state.items, action.payload];
      localStorage.setItem('items', JSON.stringify(items));
      return {
        ...state,
        items: items,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };
    default:
      return new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
