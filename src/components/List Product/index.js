import React, { useContext, useRef, useState } from 'react'
import Item from '../Item'
import Button from '../common/Button'
import Popup from '../common/Popup'
import Search from '../Search'
import * as SC from './style' // SC is stands for Styled-Components

import { StoreContext } from '../../store'

const ListProduct = () => {
  const [openModal, setOpenModal] = useState(false)
  const [query, setQuery] = useState('')
  const { addProduct, products, filterList } = useContext(StoreContext)
  const typingTimeoutRef = useRef(null)

  const handleSearchInput = e => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const value = e.target.value.trim()
      setQuery(value)
    }, 500)
  }

  return (
    <SC.ListProductWrap>
      <SC.ListProductTitle>List Product</SC.ListProductTitle>
      <Search handleChange={handleSearchInput} />
      <Button
        mg="10px 100px"
        label="Create"
        backgroundColor="#418CD1"
        img="/icons/add.svg"
        handleClick={() => setOpenModal(true)}
      />
      {openModal && <Popup closeModal={setOpenModal} onSubmit={addProduct} title="Create Product" />}
      <SC.ListProductItem>
        <Item products={filterList.length === 0 ? products : filterList} query={query} />
      </SC.ListProductItem>
    </SC.ListProductWrap>
  )
}

export default ListProduct
