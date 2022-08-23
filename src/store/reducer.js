import { ADD_ITEM} from "./constant";

const initState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {

    case ADD_ITEM:
      const items = [...state.items, action.payload];
      localStorage.setItem('items', JSON.stringify(items));
      return {
        ...state,
        items: items,
      };

    default:
      return state
  }
}

export { initState };
export default reducer;
