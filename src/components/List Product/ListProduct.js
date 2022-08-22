import React, { useState } from "react";
import Item from "../Item/Item";
import { ListProductTitle, ListProductWrap, ListProductItem } from "./style";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

function ListProduct() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ListProductWrap>
      <ListProductTitle>List Product</ListProductTitle>
      <Button
        label="Create"
        backgroundColor="#418CD1"
        img="/icons/add.svg"
        handleClick={() => setOpenModal(true)}
      />
      {openModal && <Popup closeModal={setOpenModal}/>}
      <ListProductItem>
        <Item />
      </ListProductItem>
    </ListProductWrap>
  );
}

export default ListProduct;
