import React, { useContext, useState } from "react";
import Item from "../Item/Item";
import { ListProductTitle, ListProductWrap, ListProductItem } from "./style";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import Search from "../Search/Search";

import { StoreContext } from "../../store";

function ListProduct() {
    const [openModal, setOpenModal] = useState(false);
    const [query, setQuery] = useState("");
    const { addProduct, products, filterList } = useContext(StoreContext);

    const handleSearchInput = (e) => {
        setQuery(e.target.value);
    };

    return (
        <ListProductWrap>
            <ListProductTitle>List Product</ListProductTitle>
            <Search handleChange={handleSearchInput} />
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
                <Item
                    products={filterList.length === 0 ? products : filterList}
                    query={query}
                />
                {console.log("query", query)}
            </ListProductItem>
        </ListProductWrap>
    );
}

export default ListProduct;
