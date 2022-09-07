import React from "react";

import ListProduct from "./components/List Product/ListProduct";
import Search from "./components/Search/Search";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Search />
      <ListProduct />
    </div>
  );
}

export default App;
