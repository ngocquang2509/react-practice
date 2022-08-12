import styled from "styled-components";

const PopupWrapper = styled.div`
  width: 750px;
  height: 600px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
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

export { PopupWrapper, PopupTitle, PopupBody, PopupLabel, PopupInput, InputContainer };
