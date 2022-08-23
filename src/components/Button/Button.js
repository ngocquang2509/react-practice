import React from "react";
import * as SC from "./style";
import PropTypes from "prop-types";

function Button({ label, backgroundColor, textColor, handleClick, img, mg }) {
  return (
    <SC.Button
      margin={mg}
      onClick={handleClick}
      bgColor={backgroundColor}
      color={textColor}
    >
      <img src={img} alt='' />
      {label}
    </SC.Button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  img: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
