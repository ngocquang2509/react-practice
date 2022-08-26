import React, { useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";

function Popup({
  title,
  label,
  closeModal,
  onSubmit,
  product = {},
  handleAdd,
}) {
  const [productValue, setProduct] = useState(product);
  //const [isSubmit, setIsSubmit] = useState(false);

  const handleOnChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setIsSubmit(true);
    onSubmit({ ...productValue });
  };

  return (
    <>
      <SC.PopupOverlay />
      <SC.PopupWrapper>
        <SC.PopupClose onClick={() => closeModal(false)}>X</SC.PopupClose>
        <SC.PopupTitle>Modal{/* {title} */}</SC.PopupTitle>
        <SC.PopupForm onSubmit={handleSubmit}>
          <SC.PopupBody>
            <SC.InputContainer>
              <SC.PopupLabel>Name{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Product Name"
                name="name"
                value={productValue.name || ""}
                onChange={handleOnChange}
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Category{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput type="text" placeholder="Category" />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Price{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Price"
                name="price"
                value={productValue.price || ""}
                onChange={handleOnChange}
              />
              {/* onChange={onChangeItem} value={itemValues.itemPrice} name='itemPrice' */}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Image{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Image link"
                name="image"
                value={productValue.image || ""}
                onChange={handleOnChange}
              />
            </SC.InputContainer>
          </SC.PopupBody>
          <SC.PopupFooter>
            <Button
              label="Cancel"
              backgroundColor="red"
              handleClick={() => closeModal(false)}
            />
            <Button type="submit" label="Create" backgroundColor="green" />
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
