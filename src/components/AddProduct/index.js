import React, { useContext, useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { selectCategory, StoreContext } from '../../store';

const AddProduct = ({ products = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productValue, setProductValue] = useState(products);
  const [showErr, setShowErr] = useState({});
  const { addProduct } = useContext(StoreContext);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
    addProduct({...productValue});
    handleClose();
  };

  return (
    <>
      <Button label="Create" handleClick={handleOpen}>
        <Add size="24" />
      </Button>
      {isOpen && (
        <Modal title="Create Product" isOpen={setIsOpen}>
          <form >
            <div>

            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              value={productValue.productName || ''}
              onChange={handleOnChange}
            />
            </div>
            <label htmlFor="productCategory">Product Category</label>
            <select name="productCategory" value={productValue.productCategory || ''} onChange={handleOnChange}>
              {selectCategory.map((options) => (
                <option disabled={options.disable} key={options.id} value={options.value}>
                  {options.label}
                </option>
              ))}
            </select>
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Price"
              name="productPrice"
              value={productValue.productPrice || ''}
              onChange={handleOnChange}
            />
            <label htmlFor="productImage">Product Image</label>
            <input
              type="text"
              placeholder="Image"
              name="productImage"
              value={productValue.productImage || ''}
              onChange={handleOnChange}
            />
            <Button label='Cancel' handleClick={handleClose} />
            <Button label='Submit' handleClick={handleSubmit}/>
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddProduct;
