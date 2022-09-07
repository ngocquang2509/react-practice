import React, { useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./style"; // SC stand for Styled Components
import Button from "../Button/Button";
import { selectCategory } from "../../store";

const Popup = ({ title, closeModal, onSubmit, products = {} }) => {
  const [productValue, setProductValue] = useState(products);
  const [showErr, setShowErr] = useState({});

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const { name, value } = e.target;
    setProductValue((values) => ({ ...values, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!productValue.productName) {
      err.productName = "Product name is required";
    }
    if (!productValue.productPrice) {
      err.productPrice = "Product price is required";
    } else if (productValue.productPrice < 0) {
      err.productPrice = "Product price must be greater than 0";
    }
    if (!productValue.productCategory) {
      err.productCategory = "Product category is required";
    }
    if (!productValue.productImage) {
      err.productImage = "Product image is required";
    }
    setShowErr(err);
    if (Object.keys(err).length > 0) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (!validation) return;
    productValue.id = Date.now();
    onSubmit({ ...productValue });
    closeModal(false);
  };

  const handleCancel = () => {
    closeModal(false);
  };

  return (
    <>
      <SC.PopupOverlay />
      <SC.PopupWrapper>
        <SC.PopupClose onClick={handleCancel}>X</SC.PopupClose>
        <SC.PopupTitle>{title}</SC.PopupTitle>
        <SC.PopupForm onSubmit={handleSubmit}>
          <SC.PopupBody>
            <SC.InputContainer>
              <SC.PopupLabel>Name</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Product Name"
                name="productName"
                value={productValue.productName || ""}
                onChange={handleOnChange}
              />
              <SC.PopupError>{showErr.productName}</SC.PopupError>
            </SC.InputContainer>
            <SC.SelectContainer>
              <SC.PopupLabel>Category</SC.PopupLabel>
              <SC.SelectMenu
                name="productCategory"
                value={productValue.productCategory || ""}
                onChange={handleOnChange}
              >
                {selectCategory.map((options) => (
                  <SC.SelectInput
                    disabled={options.disable}
                    key={options.id}
                    value={options.value}
                  >
                    {options.label}
                  </SC.SelectInput>
                ))}
                <SC.PopupError>{showErr.productCategory}</SC.PopupError>
              </SC.SelectMenu>
            </SC.SelectContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Price</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                inputMode="numeric"
                placeholder="Price"
                name="productPrice"
                value={productValue.productPrice || ""}
                onChange={handleOnChange}
              />
              <SC.PopupError>{showErr.productPrice}</SC.PopupError>
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Image</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Image link"
                name="productImage"
                value={productValue.productImage || ""}
                onChange={handleOnChange}
              />
              <SC.PopupError>{showErr.productImage}</SC.PopupError>
            </SC.InputContainer>
          </SC.PopupBody>
          <SC.PopupFooter>
            <Button
              label="Cancel"
              backgroundColor="red"
              handleClick={handleCancel}
            />
            <Button type="button" label="Create" backgroundColor="green" />
          </SC.PopupFooter>
        </SC.PopupForm>
      </SC.PopupWrapper>
    </>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

export default Popup;
