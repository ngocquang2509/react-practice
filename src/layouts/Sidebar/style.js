import styled from 'styled-components'

const LeftSideBar = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(205.17deg, #418cd1 10.93%, #9c41d1 116.08%);
`
const BrandName = styled.p`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 0;
`

const SideBtn = styled.button`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 30px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    opacity: 0.5;
    border-radius: 10px;
    border: 2px solid #fff;
  }
`

const SideBtnText = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 10px;
  font-size: 20px;
  color: #fff;
`

export { LeftSideBar, BrandName, SideBtn, SideBtnText }
