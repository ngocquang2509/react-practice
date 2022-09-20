import React, { useContext, useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { StyledForm, StyledInputContainer, StyledInputLabel, StyledInput, StyledSelect } from './style';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
import { StoreContext, selectCategory } from '../../store';

const EditProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {updateProduct, products} = useContext(StoreContext)
  const [productValue, setProductValue] = useState(products)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log('handleToggle', isOpen)
  }

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProductValue((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(productValue);
    handleToggle();
  }

  return (
    <>
      <Button label="Edit" backgroundColor="#ffcf00" handleClick={handleToggle}>
        <EditAlt size="24" />
      </Button>

      <Modal title="Edit Product" isOpen={isOpen} onClose={handleToggle} onSubmit={handleSubmit}>
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

export default EditProduct;
