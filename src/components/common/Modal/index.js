import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledOverlay,
  StyledModalWrapper,
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledCloseModal
} from './style';


const Modal = ({ title, isOpen, children}) => {
  return (
    <>
      <StyledOverlay />
      <StyledModalWrapper>
        <StyledModal>
          <StyledCloseModal onClick={() => isOpen(false)}>X</StyledCloseModal>
          <StyledModalHeader>{title}</StyledModalHeader>
          <StyledModalContent>{children}</StyledModalContent>
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
};

export default Modal;
