import React from "react";
import * as SC from "./style";
import PropTypes from "prop-types";

function Button({ label, backgroundColor, textColor, handleClick, img }) {
  return (
    <SC.Button
      onClick={handleClick}
      bgColor={backgroundColor}
      color={textColor}
    >
      <img src={img} alt={label} />
      {label}
    </SC.Button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,

  handleClick: PropTypes.func,
};

export default Button;
