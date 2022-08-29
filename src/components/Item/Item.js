import React from "react";
// import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";

function Item({ theProduct }) {
  return (
    <>
      {theProduct?.map((product, index) => (
        <SC.WrappItem key={index}>
          <SC.ItemImageWrapper>
            <SC.ItemImg src={product.productImage} />
          </SC.ItemImageWrapper>
          <SC.ItemName>{product.productName}</SC.ItemName>
          <SC.ItemCategory as="p">{product.prodcutCategory}</SC.ItemCategory>
          <SC.ItemPrice as="p">{product.prodcutPrice} VND</SC.ItemPrice>
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

// Item.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
//   category: PropTypes.string,
//   images: PropTypes.string,
// };

export default Item;
