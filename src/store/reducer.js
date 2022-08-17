import { ADD_ITEM, SET_ITEM_INPUT } from "./constant";

const initState = {
  item: [],
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
    default:
      return new Error("Invalid Action");
  }
}

export {initState}
export default reducer
