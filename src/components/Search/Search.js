import React from "react";
import * as SC from "./style";

const Search = ({ handleChange }) => {
    return (
        <SC.SearchBar
            type="text"
            placeholder="Search product..."
            onChange={handleChange}
        />
    );
};

export default Search;
