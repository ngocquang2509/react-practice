import React, { useContext } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { StoreContext } from "../../store";

function Item() {
  const {products} = useContext(StoreContext);
  return (
    <>
      {products && products.map((products, index) => (
        <SC.WrappItem key={index}>
          <SC.ItemImageWrapper>
            <SC.ItemImg src={products.productImage} />
          </SC.ItemImageWrapper>
          <SC.ItemName>{products.productName}</SC.ItemName>
          <SC.ItemCategory as="p">{products.productCategory}</SC.ItemCategory>
          <SC.ItemPrice as="p">{products.productPrice} VND</SC.ItemPrice>
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
