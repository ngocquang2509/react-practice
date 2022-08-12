import React from "react";
import { LeftSideBar, BrandName, SideBtn, SideBtnText } from "./style";

function SideBar() {
  return (
    <LeftSideBar>
      <BrandName>Brand Name</BrandName>
      <SideBtn>
        <img src="/icons/home.svg" alt="home" />
        <SideBtnText>Home</SideBtnText>
      </SideBtn>
      <SideBtn>
        <img src="/icons/hamburger-menu.svg" alt="home" />
        <SideBtnText>List Product</SideBtnText>
      </SideBtn>
      <SideBtn>
        <img src="/icons/discount.svg" alt="home" />
        <SideBtnText>Discount</SideBtnText>
      </SideBtn>
    </LeftSideBar>
  );
}

export default SideBar;
