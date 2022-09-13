import React from "react";
import * as SC from "./style";


const Header = () => {
    return(
        <>
        <SC.Header>
            <SC.BrandName>Company A</SC.BrandName>
            <SC.HeaderRight>
                <SC.HeaderLink href="/">Home</SC.HeaderLink>
                <SC.HeaderLink href="/about">About</SC.HeaderLink>
                <SC.HeaderLink href="/contact">Contact</SC.HeaderLink>
            </SC.HeaderRight>
        </SC.Header>
        </>
    )
}

export default Header