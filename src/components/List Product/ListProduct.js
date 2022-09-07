import React, { useContext, useState } from "react";
import Item from "../Item/Item";
import { ListProductTitle, ListProductWrap, ListProductItem } from "./style";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

import { StoreContext } from "../../store";

function ListProduct() {
  const [openModal, setOpenModal] = useState(false);
  const { addProduct, products, filterList } = useContext(StoreContext);

  console.log("products", products);
  console.log("filterList", filterList);

  return (
    <ListProductWrap>
      <ListProductTitle>List Product</ListProductTitle>
      <Button
        mg="10px 100px"
        label="Create"
        backgroundColor="#418CD1"
        img="/icons/add.svg"
        handleClick={() => setOpenModal(true)}
      />
      {openModal && (
        <Popup
          closeModal={setOpenModal}
          onSubmit={addProduct}
          title="Create Product"
        />
      )}
      <ListProductItem>
        <Item products={filterList.length === 0 ? products : filterList} />
      </ListProductItem>
    </ListProductWrap>
  );
}

export default ListProduct;
