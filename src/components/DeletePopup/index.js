import React from 'react'
import Button from '../common/Button'
import PropTypes from 'prop-types'
import * as SC from './style' // SC stand for Styled Components

const DeletePopup = ({ closeDeleteModal, onSubmit }) => {
  return (
    <>
      <SC.DeletePopupOverlay />
      <SC.DeletePopupWrapper>
        <SC.DeletePopupClose onClick={closeDeleteModal}>X</SC.DeletePopupClose>
        <SC.DeletePopupTitle>Delete Product</SC.DeletePopupTitle>
        <SC.DeletePopupBody>
          <div>Are you sure you want to delete this product?</div>
        </SC.DeletePopupBody>
        <SC.DeletePopupFooter>
          <Button label="Cancel" backgroundColor="red" handleClick={closeDeleteModal} />
          <Button yes handleClick={onSubmit} label="Delete" backgroundColor="green" />
        </SC.DeletePopupFooter>
      </SC.DeletePopupWrapper>
    </>
  )
}

DeletePopup.propTypes = {
  closeDeleteModal: PropTypes.func,
  onSubmit: PropTypes.func
}

export default DeletePopup
