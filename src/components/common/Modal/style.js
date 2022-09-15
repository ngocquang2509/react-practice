import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 20%;
  left: 35%;
  z-index: 1050;
`;
export const StyledModal = styled.div`
  width: 750px;
  height: auto;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledModalHeader = styled.h3`
  font-size: 32px;
  text-align: center;
  margin: 50px;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledCloseModal = styled.span`
  position: absolute;
  top: 20px;
  right: 50px;
  cursor: pointer;
`
