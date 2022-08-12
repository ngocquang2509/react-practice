import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 20px;
  background-color: ${props => props.bgColor ? props.bgColor : "#fff"};
  color: ${props => props.color ? props.color : "#000"};
`;


