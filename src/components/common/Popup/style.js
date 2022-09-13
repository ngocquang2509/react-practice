import styled from 'styled-components'

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`

const PopupWrapper = styled.div`
  position: fixed;
  left: 700px;
  top: 150px;
  width: 750px;
  height: 600px;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: hidden;
  outline: 0;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
`

const PopupClose = styled.span`
  position: absolute;
  top: 20px;
  right: 50px;
  cursor: pointer;
`
const PopupTitle = styled.h3`
  font-size: 32px;
  text-align: center;
  margin: 30px;
`

const PopupForm = styled.form`
  margin: 50px;
`

const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SelectMenu = styled.select`
  width: 592px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin: 10px;
  padding-left: 20px;
  &:hover,
  &:focus,
  &:active {
    border-color: #e85f99;
    box-shadow: 0 0 0 3px hsla(335, 75%, 64%, 0.25);
  }
`
const SelectInput = styled.option`
  width: 570px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin: 10px;
  padding-left: 20px;
`

const PopupLabel = styled.label`
  margin: 10px 30px 0;
  font-size: 20px;
`
const PopupInput = styled.input`
  width: 570px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin: 10px;
  padding-left: 20px;
  &:hover,
  &:focus,
  &:active {
    border-color: #e85f99;
    box-shadow: 0 0 0 3px hsla(335, 75%, 64%, 0.25);
  }
`

const PopupFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`

const PopupError = styled.div`
  color: red;
  font-size: 10px;
  padding-left: 30px;
`

export {
  PopupWrapper,
  PopupTitle,
  PopupBody,
  PopupLabel,
  PopupInput,
  InputContainer,
  PopupClose,
  PopupOverlay,
  PopupFooter,
  PopupForm,
  SelectInput,
  SelectMenu,
  PopupError
}
