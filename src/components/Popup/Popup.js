import React, { useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./style"; // SC stand for Styled Components
import Button from "../Button/Button";
import { selectCategory } from "../../store";

function Popup({ title, closeModal, onSubmit, products = {} }) {
  const [product, setProduct] = useState(products);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const { name, value } = e.target;
    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    onSubmit({ ...product });
    closeModal(false);
  };

  const handleCancel = () => {
    closeModal(false);
  };

  return (
    <>
      <SC.PopupOverlay />
      <SC.PopupWrapper>
        <SC.PopupClose onClick={() => closeModal(false)}>X</SC.PopupClose>
        <SC.PopupTitle>{title}</SC.PopupTitle>
        <SC.PopupForm onSubmit={handleSubmit}>
          <SC.PopupBody>
            <SC.InputContainer>
              <SC.PopupLabel>Name</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Product Name"
                name="productName"
                value={product.productName || ""}
                onChange={handleOnChange}
              />
            </SC.InputContainer>
            <SC.SelectContainer>
              <SC.PopupLabel>Category</SC.PopupLabel>
              <SC.SelectMenu
                name="productCategory"
                value={product.productCategory || ""}
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
              </SC.SelectMenu>
            </SC.SelectContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Price</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Price"
                name="productPrice"
                value={product.productPrice || ""}
                onChange={handleOnChange}
              />
              {/* onChange={onChangeItem} value={itemValues.itemPrice} name='itemPrice' */}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Image</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Image link"
                name="productImage"
                value={product.productImage || ""}
                onChange={handleOnChange}
              />
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
}

Popup.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

export default Popup;
