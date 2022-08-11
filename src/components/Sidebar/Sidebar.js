import React from "react";
import { LeftSideBar, BrandName, SideBtn, SideBtnText } from "./style";
import ItemButton from "../Button/Button";
import {ButtonProvider} from "../Context/ButtonContext";


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
      <ButtonProvider>
        <ItemButton/>
      </ButtonProvider>
    </LeftSideBar>
  );
}

export default SideBar;
