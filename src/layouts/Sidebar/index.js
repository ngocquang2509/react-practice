import React from 'react'
import { LeftSideBar, BrandName, SideBtn, SideBtnText } from './style'

const SideBar = () => {
  return (
    <LeftSideBar>
      <BrandName>Logo</BrandName>
      <SideBtn>
        <img src="/icons/home.svg" alt="home" />
        <SideBtnText>Home</SideBtnText>
      </SideBtn>
    </LeftSideBar>
  )
}

export default SideBar
