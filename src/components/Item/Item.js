import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { StoreContext } from "../../store";
import DeletePopup from "../DeletePopup/DeletePopup";
import Popup from "../Popup/Popup";

const Item = ({ products }) => {
  const { deleteProduct, updateProduct } = useContext(StoreContext);
  const [selectProductUpdate, setSelectProductUpdate] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleShowDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleCloseModal = () => {
    setSelectProductUpdate(null);
  };

  const handleDeleteProduct = () => {
    deleteProduct(products.id);
    setOpenDeleteModal(false);
  };

  const handleUpdateProduct = (product) => {
    updateProduct(product);
  };

  return (
    <>
      {products.map((product) => (
        <SC.WrappItem key={product.id}>
          <SC.ItemImageWrapper>
            <SC.ItemImg src={product.productImage} />
          </SC.ItemImageWrapper>
          <SC.ItemName>{product.productName}</SC.ItemName>
          <SC.ItemCategory as="p">{product.productCategory}</SC.ItemCategory>
          <SC.ItemPrice as="p">{product.productPrice} VND</SC.ItemPrice>
          <SC.Container>
            <Button
              label="Edit"
              backgroundColor="#ffcf00"
              img="/icons/edit.svg"
              handleClick={() => setSelectProductUpdate(product)}
            />
            <Button
              label="Delete"
              backgroundColor="#ff0000"
              img="/icons/delete.svg"
              handleClick={handleShowDeleteModal}
            />
            {!!openDeleteModal && (
              <DeletePopup
                closeDeleteModal={handleCloseDeleteModal}
                onSubmit={handleDeleteProduct}
              />
            )}
            {!!selectProductUpdate && (
              <Popup
                products={selectProductUpdate}
                closeModal={handleCloseModal}
                onSubmit={handleUpdateProduct}
                title="Update Product"
              />
            )}
          </SC.Container>
        </SC.WrappItem>
      ))}
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  images: PropTypes.string,
};

export default Item;
