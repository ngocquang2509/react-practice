import React, {useState, useContext } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { StoreContext } from "../../store";
import DeletePopup from "../DeletePopup/DeletePopup";

const Item = () => {
  const {products, deleteProduct} = useContext(StoreContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      {products && products.map((products) => (
        <SC.WrappItem key={products.id}>
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
              handleClick={() => setOpenDeleteModal(true)}
            />
            {openDeleteModal && <DeletePopup closeDeleteModal={setOpenDeleteModal} onSubmit={deleteProduct} />}
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
