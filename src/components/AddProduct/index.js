import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import {Add} from '@styled-icons/fluentui-system-filled/Add';

const AddProduct = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    return (
        <>
        <Button label='Create' handleClick={handleOpen}><Add size='24'/></Button>
        {isOpen && <Modal title='Create Product' isOpen={setIsOpen}>
            <label htmlFor='productName'>Product Name</label>
            <input type='text' id='productName' />
            <label htmlFor='productPrice'>Product Price</label>
            <input type='text' id='productPrice' />
            </Modal>}
        </>
    )
}

export default AddProduct;