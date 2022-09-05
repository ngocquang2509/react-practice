import React, { useState } from "react";
import Button from "../Button/Button";
import * as SC from "./style"; // SC stand for Styled Components

const DeletePopup = ({ onClose, onSubmit }) => {
  return (
    <>
      <SC.PopupOverlay />
      <SC.PopupWrapper>
        <SC.PopupClose onClick={onClose}>X</SC.PopupClose>
        <SC.PopupTitle>Delete Product</SC.PopupTitle>
        <SC.PopupBody>
          <SC.PopupLabel>
            Are you sure you want to delete this product?
          </SC.PopupLabel>
        </SC.PopupBody>
        <SC.PopupFooter>
            <Button label="Cancel" backgroundColor='red' handleClick={onClose}/>
            <Button yes handleClick={onSubmit}/>
        </SC.PopupFooter>
      </SC.PopupWrapper>
    </>
  );
};


export default DeletePopup;
