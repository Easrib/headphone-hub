import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = (props) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        , [])

    const selectProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const clearCart = () => {
        setCart([])
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
                    <Cart cart={cart} clearCart={clearCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;