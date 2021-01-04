import React from 'react';

import './Checkout.css';

function Checkout() {
    return(
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="/images/banner.png" alt="Ad" />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <h2>Subtotal: 0</h2>
            </div>
        </div>
    )
}

export default Checkout;