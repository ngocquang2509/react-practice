import React, { useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { useStore } from "../../store";
function Item({ name, price, category, image }) {
  const [state, dispatch] = useStore();
  const { products } = state;
  const [selectedId, setSelectedId] = useState();

  const delItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  const handleDeleteItem = () => {
    delItem(selectedId);
    setSelectedId(null);
  };

  return (
    <React.Fragment>
      {products.map((product, index) => (
        <SC.WrappItem key={index}>
          <SC.ItemImageWrapper>
            <SC.ItemImg src={product.image} />
          </SC.ItemImageWrapper>
          <SC.ItemName>{product.name}</SC.ItemName>
          <SC.ItemCategory as="p">{product.category}</SC.ItemCategory>
          <SC.ItemPrice as="p">{product.price} VND</SC.ItemPrice>
          <SC.Container>
            <Button
              label="Edit"
              backgroundColor="#ffcf00"
              img="/icons/edit.svg"
            />
            <Button
              label="Delete"
              backgroundColor="#ff0000"
              img="/icons/delete.svg"
              handleClick={handleDeleteItem}
            />
          </SC.Container>
        </SC.WrappItem>
      ))}
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
};

export default Item;
