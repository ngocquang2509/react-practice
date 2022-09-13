import styled from 'styled-components'

export const Button = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  opacity: 0.9;
  margin: ${props => (props.margin ? props.margin : '10px 20px')};
  background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
  color: ${props => (props.color ? props.color : '#000')};

  &:hover {
    opacity: 1;
  }
`

export const Label = styled.label`
  font-size: 16px;
  padding-left: 5px;
`
