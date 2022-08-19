import React from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { useStore } from "../../store";
function Item({ name, price, category, image }) {

  const [state, dispatch] = useStore();
  const [selectedId, setSelectedId] = useState();

  const delItem = (id) => {
    dispatch({
      type: "DEL_ITEM",
      payload: id
    })
  }

  const handleDeleteItem = () => {
    delItem(selectedId);
    setSelectedId(null);
  }

  return (
    <SC.WrappItem>
      <SC.ItemImageWrapper>
        <SC.ItemImg src={image} />
      </SC.ItemImageWrapper>
      <SC.ItemName>Product name{/*{name}*/}</SC.ItemName>  
      <SC.ItemCategory as="p">Categoy{/*{category}*/}</SC.ItemCategory>
      <SC.ItemPrice as="p">1000000{/*{price}*/} VND</SC.ItemPrice>
      <SC.Container>
        <Button label="Edit" backgroundColor='#ffcf00' img='/icons/edit.svg'/>
        <Button label="Delete" backgroundColor="#ff0000" img='/icons/delete.svg' handleClick={handleDeleteItem}/>
      </SC.Container>
    </SC.WrappItem>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
};

export default Item;
