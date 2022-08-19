import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
//import Button from "../Button/Button";

const Popup = ({ title, label, isShow, hide }) =>
  isShow
    ? ReactDOM.createPortal(
        <React.Fragment>
          <SC.PopupOverlay />
          <SC.PopupWrapper>
            <SC.PopupClose onClick={hide}>X</SC.PopupClose>
            <SC.PopupTitle>Modal{/* {title} */}</SC.PopupTitle>
            <SC.PopupBody>
              <SC.InputContainer>
                <SC.PopupLabel>Name{/* {label} */}</SC.PopupLabel>
                <SC.PopupInput />
              </SC.InputContainer>
            </SC.PopupBody>
            <SC.PopupFooter>
              <Button label="Cancel" backgroundColor="red" handleClick={hide}/>
              <Button label="Create" backgroundColor="green" />
            </SC.PopupFooter>
          </SC.PopupWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

Popup.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

export default Popup;
