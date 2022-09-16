import React, { useContext, useRef, useState } from 'react';
import Item from '../Item';
import Button from '../common/Button';
import Popup from '../common/Popup';
import Search from '../Search';
import * as SC from './style'; // SC is stands for Styled-Components
import { StoreContext } from '../../store';

import AddProduct from '../AddProduct';

const ListProduct = () => {
  const [query, setQuery] = useState('');
  const { products, filterList } = useContext(StoreContext);
  const typingTimeoutRef = useRef(null);

  const handleSearchInput = (e) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const value = e.target.value.trim();
      setQuery(value);
    }, 500);
  };

  return (
    <SC.ListProductWrap>
      <SC.ListProductTitle>List Product</SC.ListProductTitle>
      <Search handleChange={handleSearchInput} />
      <AddProduct />
      <SC.ListProductItem>
        <Item products={filterList.length === 0 ? products : filterList} query={query} />
      </SC.ListProductItem>
    </SC.ListProductWrap>
  );
};

export default ListProduct;
