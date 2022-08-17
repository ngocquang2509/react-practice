import React from "react";
import Item from "../Item/Item";
import { ListProductTitle, ListProductWrap, ListProductItem } from "./style";

function ListProduct() {
  return (
    <ListProductWrap>
      <ListProductTitle>List Product</ListProductTitle>
      <ListProductItem>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ListProductItem>
    </ListProductWrap>
  );
}

export default ListProduct;
