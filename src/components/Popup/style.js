import styled from "styled-components";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`;

const PopupWrapper = styled.div`
  position: fixed;
  left: 700px;
  top: 200px;
  width: 750px;
  height: 600px;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const PopupClose = styled.span`
  position: absolute;
  top: 20px;
  right: 50px;
  cursor: pointer;
`;
const PopupTitle = styled.h3`
  margin: 10px;
  font-size: 32px;
  text-align: center;
  margin: 50px;
`;

const PopupBody = styled.div`
  margin: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PopupLabel = styled.label`
  margin: 10px 30px;
  font-size: 24px;
`;
const PopupInput = styled.input`
  width: 570px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin: 10px;
`;

export {
  PopupWrapper,
  PopupTitle,
  PopupBody,
  PopupLabel,
  PopupInput,
  InputContainer,
  PopupClose,
  PopupOverlay,
};
