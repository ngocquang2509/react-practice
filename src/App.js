import React from "react";
// import AppBody from "./components/Body/Body";
// import { Body } from "./components/Body/style";

import Header from "./components/Header/Header";
import ListProduct from "./components/List Product/ListProduct";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <ListProduct />
    </div>
  );
}

export default App;
