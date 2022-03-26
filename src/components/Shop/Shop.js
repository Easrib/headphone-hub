import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [item, setItem] = useState([])

    useEffect(() =>
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        , [])

    const selectProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    let selectedItem = [];
    let selectOneItem = []

    for (const product of cart) {

        selectedItem = [...selectedItem, product.name]
    }

    const selectOneForMe = () => {
        let selectOneItemIndex = Math.floor(Math.random() * selectedItem.length)
        selectOneItem = selectedItem[selectOneItemIndex]
        setItem(selectOneItem)
    }
    const clearCart = () => {
        setCart([])
        setItem([])
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            products.map(product => <Product key={product.id} product={product}
                                selectProduct={selectProduct}></Product>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <Cart clearCart={clearCart} selectedItem={selectedItem} item={item} selectOneForMe={selectOneForMe}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;