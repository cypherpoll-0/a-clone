import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/ku/hol20/ILM_650x4599centoffercoral._CB416428646_.jpg"
                alt=""
                />

                <div>
                    <h3> hello, {user ? user?.email : 'Guest'} </h3>
                    <h2 className="checkout__title">Your Shopping basket</h2>

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

            <div classname="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
