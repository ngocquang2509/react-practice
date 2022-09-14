import React from 'react';
import SideBar from './layouts/Sidebar';
import ListProduct from './components/List Product';
import { StoreProvider } from './store';
import Header from './layouts/Header';

const App = () => {
  return (
    <>
      <SideBar />
      <Header />
      <StoreProvider>
        <ListProduct />
      </StoreProvider>
    </>
  );
};

export default App;
