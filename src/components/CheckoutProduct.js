import React from 'react';

import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Product" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {/* 'Array()' creates empty elements in the array */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#127775;</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove to Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;