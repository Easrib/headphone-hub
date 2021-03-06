import React from 'react';

const Cart = ({ clearCart, selectedItem, item, selectOneForMe }) => {


    return (
        <div className='bg-info p-2'>
            <h1>Selected Headphone</h1>
            <div>
                {
                    selectedItem.map(item => <h3>{item}</h3>)
                }
            </div>
            <p><button className='btn btn-primary' onClick={selectOneForMe}>Select One for Me</button></p>
            <h2>{item}</h2>
            <p><button className='btn btn-primary' onClick={clearCart}>Clear Cart</button></p>
        </div >
    );
};

export default Cart;