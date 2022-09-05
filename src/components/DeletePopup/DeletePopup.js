import React from "react";
import Button from "../Button/Button";
import * as SC from "./style"; // SC stand for Styled Components

const DeletePopup = ({ closeDeleteModal, onSubmit }) => {

    const handleClose = () => {
        closeDeleteModal(false);
    }
  return (
    <>
      <SC.DeletePopupOverlay />
      <SC.DeletePopupWrapper>
        <SC.DeletePopupClose onClick={handleClose}>X</SC.DeletePopupClose>
        <SC.DeletePopupTitle>Delete Product</SC.DeletePopupTitle>
        <SC.DeletePopupBody>
          <div>
            Are you sure you want to delete this product?
          </div>
        </SC.DeletePopupBody>
        <SC.DeletePopupFooter>
            <Button label="Cancel" backgroundColor='red' handleClick={handleClose}/>
            <Button yes handleClick={onSubmit} label="Delete" backgroundColor='green'/>
        </SC.DeletePopupFooter>
      </SC.DeletePopupWrapper>
    </>
  );
};


export default DeletePopup;
