import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { Delete } from '@styled-icons/fluentui-system-regular/Delete';

const DeleteProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handeOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button label="Delete" backgroundColor="#ff0000" handleClick={handeOpen}>
        <Delete size="24" />
      </Button>
      {isOpen && (
        <Modal title="Delete" isOpen={setIsOpen}>
          <p>Are you sure you want to delete this product?</p>
        </Modal>
      )}
    </>
  );
};

export default DeleteProduct;
