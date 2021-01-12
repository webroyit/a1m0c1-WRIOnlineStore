import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

import './Payment.css';
import axios from '../axios';
import  { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const history = useHistory();
    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // Generate the special stripe secret which allows us to charge a user
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async event => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                // Get the user card information input
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // 'paymentIntent' = payment confirmation

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            // 'replace' to prevent user from going to previous page
            history.replace('/orders');
        })
    }

    const handleChnage = event => {
        // Listen for changes in the CardElement and display any errors as the user types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return(
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Some St</p>
                        <p>Some State, SS</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChnage} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order Total: {value}
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>

                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;