import { ADD_ITEM, SET_ITEM_INPUT, DELETE_ITEM } from "./constant";

const initState = {
  item: [
    {
      id: 1,
      name: "Item 1",
      category: "Category 1",
      price: 100,
      image: "/shoes2.jpg",
    },
    {
      id: 2,
      name: "Item 2",
      category: "Category 2",
      price: 200,
      image: "https://img-morhipo.mncdn.com/mnresize/484/663/productimages/iii/BYN4062063470059/[img][5][1].jpg?1837",
    },
    {
      id: 3,
      name: "Item 3",
      category: "Category 3",
      price: 300,
      image: 'https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?hei=1024&wid=1024&qlt=95'
    },
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
    case DELETE_ITEM:
      return {
        ...state,
        item: [...state.item.filter((item) => item.id !== action.payload)],
      };
    default:
      return new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
