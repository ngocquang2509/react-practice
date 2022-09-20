import React, { useContext, useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { selectCategory, StoreContext } from '../../store';
import {
  StyledForm,
  StyledInputContainer,
  StyledInputLabel,
  StyledInput,
  StyledSelect,
} from './style';

const AddProduct = ({ products = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productValue, setProductValue] = useState(products);
  const [showErr, setShowErr] = useState({});
  const { addProduct } = useContext(StoreContext);

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log('handleToggle', isOpen)
  }

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProductValue((values) => ({ ...values, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!productValue.productName) {
      err.productName = 'Product name is required';
    }
    if (!productValue.productPrice) {
      err.productPrice = 'Product price is required';
    } else if (productValue.productPrice < 0) {
      err.productPrice = 'Product price must be greater than 0';
    }
    if (!productValue.productCategory) {
      err.productCategory = 'Product category is required';
    }
    if (!productValue.productImage) {
      err.productImage = 'Product image is required';
    }
    setShowErr(err);
    if (Object.keys(err).length > 0) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (!validation) return;
    productValue.id = Date.now();
    addProduct({ ...productValue });
    handleToggle();
  };

  return (
    <>
      <Button mg="10px 100px" backgroundColor="#418CD1" label="Create" handleClick={handleToggle}>
        <Add size="24" />
      </Button>
        <Modal title="Create Product" isOpen={isOpen} onSubmit={handleSubmit} onClose={handleToggle}>
          <StyledForm as="form">
            <StyledInputContainer>
              <StyledInputLabel htmlFor="productName">Product Name</StyledInputLabel>
              <StyledInput
                type="text"
                placeholder="Name"
                name="productName"
                value={productValue.productName || ''}
                onChange={handleOnChange}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInputLabel htmlFor="productCategory">Product Category</StyledInputLabel>
              <StyledSelect name="productCategory" value={productValue.productCategory || ''} onChange={handleOnChange}>
                {selectCategory.map((options) => (
                  <option disabled={options.disable} key={options.id} value={options.value}>
                    {options.label}
                  </option>
                ))}
              </StyledSelect>
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInputLabel htmlFor="productPrice">Product Price</StyledInputLabel>
              <StyledInput
                type="text"
                inputMode="numeric"
                placeholder="Price"
                name="productPrice"
                value={productValue.productPrice || ''}
                onChange={handleOnChange}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledInputLabel htmlFor="productImage">Product Image</StyledInputLabel>
              <StyledInput
                type="text"
                placeholder="Image link"
                name="productImage"
                value={productValue.productImage || ''}
                onChange={handleOnChange}
              />
            </StyledInputContainer>
          </StyledForm>
        </Modal>
    </>
  );
};

export default AddProduct;
