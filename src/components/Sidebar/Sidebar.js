import React from "react";
import {
  LeftSideBar,
  BrandName,
  MenuList,
  MenuItem,
  MenuItemText,
} from "./style";

function SideBar() {
  return (
    <LeftSideBar>
      <BrandName>Brand Name</BrandName>
      <MenuList>
        <MenuItem>
          <img src="/icons/home.svg" alt="home" />
          <MenuItemText>Home</MenuItemText>
        </MenuItem>
        <MenuItem>
          <img src="/icons/hamburger-menu.svg" alt="home" />
          <MenuItemText>List product</MenuItemText>
        </MenuItem>
        <MenuItem>
          <img src="/icons/discount.svg" alt="home" />
          <MenuItemText>Discount</MenuItemText>
        </MenuItem>
      </MenuList>
    </LeftSideBar>
  );
}

export default SideBar;
