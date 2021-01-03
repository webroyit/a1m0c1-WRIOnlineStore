import React from 'react';

import './Product.css';

function Product() {
    return(
        <div className='product'>
            <div className="product__info">
                <p>Water Bottle</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>10.99</strong>
                </p>
                <div className="product__rating">
                    <p>&#127775;</p>
                </div>
            </div>

            <img src="/images/product1.jpe" alt="Product" />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product;