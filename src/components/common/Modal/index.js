import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledOverlay,
  StyledModalWrapper,
  StyledModal,
  StyledModalHeader,
  StyledModalContent,
  StyledFooter,
} from './style';
import Button from '../Button';

const Modal = ({ title, isOpen, children }) => {
  return (
    <>
      <StyledOverlay />
      <StyledModalWrapper>
        <StyledModal>
          <StyledModalHeader>{title}</StyledModalHeader>
          <StyledModalContent>{children}</StyledModalContent>
          <StyledFooter>
            <Button label="Cancel" handleClick={() => isOpen(false)} />
            <Button label="Save" />
          </StyledFooter>
        </StyledModal>
      </StyledModalWrapper>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
};

export default Modal;
