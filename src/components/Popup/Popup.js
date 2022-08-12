import React from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
//import Button from "../Button/Button";

function Popup({ title, label }) {
  return (
    <SC.PopupWrapper>
      <SC.PopupTitle>{title}</SC.PopupTitle>
      <SC.PopupBody>
        <SC.InputContainer>
          <SC.PopupLabel>{label}</SC.PopupLabel>
          <SC.PopupInput />
        </SC.InputContainer>
      </SC.PopupBody>
    </SC.PopupWrapper>
  );
}

Popup.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

export default Popup;
