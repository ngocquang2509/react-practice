import React from 'react'
import PropTypes from 'prop-types'
import * as SC from './style' // SC is stands for Styled-Components

const Button = React.memo(({ label, backgroundColor, textColor, handleClick, img, mg }) => {
  console.log('render button')
  return (
    <SC.Button margin={mg} onClick={handleClick} bgColor={backgroundColor} color={textColor}>
      <img src={img} alt="" />
      <SC.Label>{label}</SC.Label>
    </SC.Button>
  )
})

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  img: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button
