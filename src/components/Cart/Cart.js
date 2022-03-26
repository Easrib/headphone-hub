import React from 'react';

const Cart = ({ cart }) => {

    let selectedItem = [];

    for (const product of cart) {

        selectedItem = [...selectedItem, product.name]
    }

    // const selectOne = (selectedItem) => {
    //     return selectedItem[Math.floor(Math.random() * selectedItem.length)]
    // }

    return (
        <div>
            <h1>Selected Headphone</h1>
            <div>
                {
                    selectedItem.map(item => <h3>{item}</h3>)
                }
            </div>
            <p><button>Select One for Me</button></p>
            <p></p>
            <p><button>Clear Cart</button></p>
        </div >
    );
};

export default Cart;