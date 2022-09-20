import React, { useContext, useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Delete } from '@styled-icons/fluentui-system-regular/Delete';
import {StoreContext} from '../../store';

const DeleteProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectProductDelete, setSelectProductDelete] = useState(null);
  const {deleteProduct, products} = useContext(StoreContext);

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log('handleToggle', isOpen)
  }

  const handleDelete = () => {
    deleteProduct(selectProductDelete);
    handleToggle()
  }

  return (
    <>
    <Button label="Delete" backgroundColor="red" handleClick={handleToggle}>
      <Delete size="24"/>
    </Button>
        <Modal title="Delete" isOpen={isOpen} onClose={handleToggle} onSubmit={handleDelete}>
          <p>Are you sure you want to delete this product?</p>
        </Modal>
    </>
  );
};

export default DeleteProduct;
