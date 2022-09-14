import React from 'react';
import { LeftSideBar, BrandName, SideBtn, SideBtnText } from './style';

const SideBar = () => {
  return (
    <LeftSideBar>
      <BrandName>
        <img src="/icons/logo.svg" alt="logo" />
      </BrandName>
      <SideBtn>
        <img src="/icons/home.svg" alt="home" />
        <SideBtnText>Home</SideBtnText>
      </SideBtn>
    </LeftSideBar>
  );
};

export default SideBar;
