import React, { useContext } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import Button from "../Button/Button";
import { useLocalStorage } from "../../store/hooks";
import Context from "../../store/Context";
import actions from "../../store";
function Popup({ title, label, closeModal, onSubmit }) {
  // const [name, setName] = useLocalStorage("name", "");
  // const [price, setPrice] = useLocalStorage("price", "");
  // const [image, setImage] = useLocalStorage("image", "");

  const [product, setProduct] = useLocalStorage("product", {});

  const [state, dispatch] = useContext(Context)
  const { products } = state;
  
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct(values => ({...values, [name]: value}));
    dispatch(actions.addProduct(product));
  }

  return (
    <>
      <SC.PopupOverlay />
      <SC.PopupWrapper>
        <SC.PopupClose onClick={() => closeModal(false)}>X</SC.PopupClose>
        <SC.PopupTitle>Modal{/* {title} */}</SC.PopupTitle>
        <SC.PopupForm onSubmit={(e) => e.preventDefault}>
          <SC.PopupBody>
            <SC.InputContainer>
              <SC.PopupLabel>Name{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Product Name"
                name="name"
                value={product.name || ''}
                onChange={handleOnChange}
              />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Category{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput type="text" placeholder="Category" />
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Price{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={handleOnChange}
              />
              {/* onChange={onChangeItem} value={itemValues.itemPrice} name='itemPrice' */}
            </SC.InputContainer>
            <SC.InputContainer>
              <SC.PopupLabel>Image{/* {label} */}</SC.PopupLabel>
              <SC.PopupInput
                type="text"
                placeholder="Image link"
                name="image"
                value={product.image}
                onChange={handleOnChange}
              />
            </SC.InputContainer>
          </SC.PopupBody>
          <SC.PopupFooter>
            <Button
              label="Cancel"
              backgroundColor="red"
              handleClick={() => closeModal(false)}
            />
            <Button type="submit" label="Create" backgroundColor="green" />
          </SC.PopupFooter>
        </SC.PopupForm>
      </SC.PopupWrapper>
    </>
  );
}

Popup.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

export default Popup;
