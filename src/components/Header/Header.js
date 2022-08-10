import React from "react";
import {AppHeader, SearchBar} from './style';

function Header() {
    return(
        <AppHeader>
            <SearchBar type="text" placeholder="Search product..." />
        </AppHeader>
    )
}

export default Header;