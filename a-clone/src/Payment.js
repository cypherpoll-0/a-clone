import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function Payment() {

    const [{ basket, user }, dispatch ] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = e => {
        {/*6:00:56*/}
    }

    const handleChange = e => {

    }

        return (

            <div className='payment'>
                <h1>
                    Checkout ({<Link to="/checkout">{basket?.length} items</Link>})
                </h1>
                <div className="payment__container">
                    <div className="payment__section">
                        <div className='payment__title'>
                            <h3>Delivery Address</h3>
                        </div>
                        <div className='payment__address'>
                            <p>{user?.email}</p>
                            <p>add line 1</p>
                            <p>add line 2</p>
                        </div>
                    </div>

                    <div className="payment__section">
                        <div className='payment__title'>
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className='payment__items'>
                            {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                            ))}
                        </div>
                    </div>
                    <div className="payment__section">
                        <div className='payment__title'>
                            <h3>payment method</h3>
                        </div>
                        <div className='payment__details'>
                                {/* Stripe bullshit */}

                                <form onSubmit={handleSubmit}>
                                    <CardElement />
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Payment
