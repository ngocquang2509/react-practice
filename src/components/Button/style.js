import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  display  flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;  
  margin: 10px 20px;
  background-color: ${props => props.bgColor ? props.bgColor : "#fff"};
  color: ${props => props.color ? props.color : "#000"};
`;


