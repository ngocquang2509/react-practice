import { ADD_ITEM, SET_ITEM_INPUT } from "./constant";

const initState = {
  item: [
    {
      id: 1,
      name: "Item 1",
      category: "Category 1",
      price: 100,
    },
    {
      id: 2,
      name: "Item 2",
      category: "Category 2",
      price: 200,
    },
    {
      id: 3,
      name: "Item 3",
      category: "Category 3",
      price: 300,
    }
  ],
  itemInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_ITEM_INPUT:
      return {
        ...state,
        itemInput: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        item: [...state.item, action.payload],
      };
      case DEL_ITEM:
      return {
        ...state,
        item: [...state.item.filter(item => item.id !== action.payload)]
      }
    default:
      return new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
