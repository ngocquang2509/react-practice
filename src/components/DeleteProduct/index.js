import React, { useContext, useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Delete } from '@styled-icons/fluentui-system-regular/Delete';
import {StoreContext} from '../../store';

const DeleteProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectProductDelete, setSelectProductDelete] = useState(null);
  const {deleteProduct, products} = useContext(StoreContext);

  console.log('products', products);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectProductDelete(null);
  }

  const handleDelete = () => {
    deleteProduct(selectProductDelete);
    handleClose();
  }

  return (
    <>
      <Button label="Delete" backgroundColor="#ff0000" handleClick={handleOpen}>
        <Delete size="24" />
      </Button>
      {isOpen && (
        <Modal title="Delete" isOpen={setIsOpen}>
          <p>Are you sure you want to delete this product?</p>
          <Button label='Cancel' backgroundColor='red' handleClick={handleClose} />
          <Button label='Delete' backgroundColor='green' handleClick={handleDelete} />
        </Modal>
      )}
    </>
  );
};

export default DeleteProduct;
