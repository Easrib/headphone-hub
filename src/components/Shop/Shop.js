import React, { useEffect, useState } from 'react';

const Shop = () => {
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

                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Shop;