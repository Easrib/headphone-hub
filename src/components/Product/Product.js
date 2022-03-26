import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Product = (props) => {
    const { name, img, price } = props.product

    return (
        <div className="col-md-4 col-12">
            <img className='img-fluid' src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price:$ {price}</p>
            <button onClick={() => props.selectProduct(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;