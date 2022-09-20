import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {
  StyledOverlay,
  StyledModalWrapper,
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledCloseModal,
  StyledModalAction,
} from './style';

const Modal = ({ title, isOpen, onClose, onSubmit, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <StyledOverlay />
      <StyledModalWrapper>
        <StyledModal>
          <StyledCloseModal onClick={onClose}>X</StyledCloseModal>
          <StyledModalHeader>{title}</StyledModalHeader>
          <StyledModalContent>{children}</StyledModalContent>
          <StyledModalAction>
            <Button label="Cancel" backgroundColor="red" handleClick={onClose} />
            <Button label="Submit" backgroundColor="green" handleClick={onSubmit} />
          </StyledModalAction>
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
};

export default Modal;
