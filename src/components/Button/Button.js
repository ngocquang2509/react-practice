import React from "react";
import * as SC from "./style";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {fas} from '@fortawesome/free-solid-svg-icons'

function Button({ label, backgroundColor, textColor, handleClick, icon }) {
  return (
    <SC.Button
      onClick={handleClick}
      bgColor={backgroundColor}
      color={textColor}
    >
        <img src={icon}/>
      {label}
    </SC.Button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
