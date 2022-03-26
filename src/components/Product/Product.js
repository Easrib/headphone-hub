import React from 'react';

const Product = (props) => {
    const { name, img, price } = props.product

    return (
        <div className="col-md-4 col-12">
            <img className='img-fluid' src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price:$ {price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;