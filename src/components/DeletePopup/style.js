import styled from "styled-components";

const DeletePopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const DeletePopupWrapper = styled.div`
  position: fixed;
  left: 700px;
  top: 200px;
  width: 750px;
  height: 600px;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: hidden;
  outline: 0;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const DeletePopupClose = styled.span`
  position: absolute;
  top: 20px;
  right: 50px;
  cursor: pointer;
`;
const DeletePopupTitle = styled.h3`
  font-size: 32px;
  text-align: center;
  margin: 30px;
`;

const DeletePopupBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DeletePopupFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`;


export {DeletePopupClose, DeletePopupFooter, DeletePopupOverlay, DeletePopupTitle, DeletePopupWrapper, DeletePopupBody};