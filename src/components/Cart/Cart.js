import React, { useState } from 'react';

const Cart = ({ cart, clearCart }) => {

    let selectedItem = [];

    for (const product of cart) {

        selectedItem = [...selectedItem, product.name]
    }

    const [item, setItem] = useState([])

    let selectOneItem = []

    const selectOneForMe = () => {
        let selectOneItemIndex = Math.floor(Math.random() * selectedItem.length)
        selectOneItem = selectedItem[selectOneItemIndex]
        setItem(selectOneItem)
    }


    return (
        <div>
            <h1>Selected Headphone</h1>
            <div>
                {
                    selectedItem.map(item => <h3>{item}</h3>)
                }
            </div>
            <p><button onClick={selectOneForMe}>Select One for Me</button></p>
            <h2>{item}</h2>
            <p><button onClick={clearCart}>Clear Cart</button></p>
        </div >
    );
};

export default Cart;