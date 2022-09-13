import React from 'react'
import { LeftSideBar, BrandName, SideBtn, SideBtnText } from './style'

function SideBar() {
  return (
    <LeftSideBar>
      <BrandName>Manage Product</BrandName>
      <SideBtn>
        <img src="/icons/home.svg" alt="home" />
        <SideBtnText>Home</SideBtnText>
      </SideBtn>
    </LeftSideBar>
  )
}

export default SideBar
