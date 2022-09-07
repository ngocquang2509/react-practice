import React, { useContext, useState } from "react";
import { StoreContext } from "../../store";
import * as SC from "./style";

const Search = () => {
  const [inputs, setInputs] = useState("");
  const { searchProduct } = useContext(StoreContext);

  const handleChange = (e) => {
    setInputs(e.target.value);
  };
  return (
    <SC.AppHeader>
      <SC.SearchBar
        type="text"
        placeholder="Search product..."
        onChange={handleChange}
      />
      <SC.SearchButton onClick={() => searchProduct(inputs)} />
    </SC.AppHeader>
  );
};

export default Search;
