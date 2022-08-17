import React from "react";
import * as SC from './style';

function Header() {
    return(
        <SC.AppHeader>
            <SC.SearchBar type="text" placeholder="Search product..." />
        </SC.AppHeader>
    )
}

export default Header;