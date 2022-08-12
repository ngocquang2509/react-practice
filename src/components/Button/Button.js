import React from "react";
import * as SC from "./style";
import PropTypes from "prop-types";

function Button({label, backgroundColor, handleClick}) {
    return (
        <SC.Button onClick={handleClick} style={backgroundColor && {backgroundColor}}>
            {label}
        </SC.Button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;