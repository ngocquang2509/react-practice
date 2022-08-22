import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { useStore, actions } from "../../store";
//import Button from "../Button/Button";
// import { useLocalStorage } from "../../store";

function Popup({ title, label, closeModal }) {

  function onSubmit(e) {
    e.preventDefault();
    closeModal(false);
  }

  const [state, dispatch] = useStore();
  const { items, itemInput } = state;

  function handlAddItem() {
    dispatch(actions.addItem(itemInput));
  }

  console.log("items", items);

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
                value={itemInput.itemName}
                placeholder="Item Name"
                onChange={(e) => {
                  dispatch(actions.setItemInput(e.target.value));
                }}
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Price{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                value={itemInput.itemPrice}
                placeholder="Item Price"
                onChange={(e) => {
                  dispatch(actions.setItemInput(e.target.value));
                }}
              />
              {/* onChange={onChangeItem} value={itemValues.itemPrice} name='itemPrice' */}
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
              handleClick={handlAddItem}
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
