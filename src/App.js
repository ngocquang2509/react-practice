import React from 'react'
import SideBar from './layouts/Sidebar'
import ListProduct from './components/List Product'
import { StoreProvider } from './store'

function App() {
  return (
    <>
      <SideBar />
      <StoreProvider>
        <ListProduct />
      </StoreProvider>
    </>
  )
}

export default App
