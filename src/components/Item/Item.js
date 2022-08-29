import React from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";

function Item({ name, price, category, image, products }) {
  return (
    <>
      {products &&
        products.map((product, index) => (
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
              />
            </SC.Container>
          </SC.WrappItem>
        ))}
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  images: PropTypes.string,
};

export default Item;
