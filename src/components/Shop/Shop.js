import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() =>
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        , [])
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            products.map(product => <Product key={product.id} product={product}
                                ></Product>)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>Cart display</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;