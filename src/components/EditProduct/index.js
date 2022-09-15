import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';

const EditProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button label="Edit" backgroundColor="#ffcf00" handleClick={handleOpen}>
        <EditAlt size="24" />
      </Button>
      {isOpen && (
        <Modal title="Edit Product" isOpen={setIsOpen}>
          <label htmlFor="productName">Product Name</label>
          <input type="text" id="productName" />
          <label htmlFor="productPrice">Product Price</label>
          <input type="text" id="productPrice" />
        </Modal>
      )}
    </>
  );
};

export default EditProduct;
