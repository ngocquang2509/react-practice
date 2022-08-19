import React from "react";
// import AppBody from "./components/Body/Body";
// import { Body } from "./components/Body/style";

import Header from "./components/Header/Header";
import ListProduct from "./components/List Product/ListProduct";
import SideBar from "./components/Sidebar/Sidebar";
import { StoreProvider } from "./store";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <StoreProvider>
        <ListProduct />
      </StoreProvider>
    </div>
  );
}

export default App;
