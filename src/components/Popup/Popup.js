import React from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
function Popup({ title, label, closeModal }) {

  function onSubmit(e) {
    e.preventDefault();
    closeModal(false);
  }

  return (
    <>
      <SC.PopupOverlay />
      <SC.PopupWrapper>
        <SC.PopupClose onClick={() => closeModal(false)}>X</SC.PopupClose>
        <SC.PopupTitle>Modal{/* {title} */}</SC.PopupTitle>
        <SC.PopupForm onSubmit={onSubmit}>
          <SC.PopupBody>
            <SC.InputContainer>
              <SC.PopupLabel>Name{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Item Name"
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Category{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Category"
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Price{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Price"
              />
              {/* onChange={onChangeItem} value={itemValues.itemPrice} name='itemPrice' */}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Image{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Image link"
              />
            </SC.InputContainer>
          </SC.PopupBody>
          <SC.PopupFooter>
            <Button
              label="Cancel"
              backgroundColor="red"
              handleClick={() => closeModal(false)}
            />
            <Button
              type="submit"
              label="Create"
              backgroundColor="green"
            />
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
