import React from "react";
import * as SC from "./style";
import PropTypes from "prop-types";

function Button({label, bgColor, textColor, handleClick}) {
    return (
        <SC.Button onClick={handleClick} bgColor={bgColor} color={textColor}>
            {label}
        </SC.Button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    // backgroundColor: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;