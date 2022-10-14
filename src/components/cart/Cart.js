import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart(props) {
    const cart = props.cart


    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        total = (total + product.price * product.quantity);
    }


    // const total = cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    // let total = 0
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i]
    //     total = total + product.price
    // }
    let shipping = 0
    if (total > 200) {
        shipping = 0;
    } else if (total > 100) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.99
    }
    const subTotal = (Number(total) + Number(shipping)).toFixed(2)


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order: {totalQuantity}</p>
            <p>Product Price: ${total.toFixed(2)}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Total Price: $ {subTotal}</p>
            <Link to={props.btnPath}>
                <button className="product-button">{props.btnText}</button>
            </Link>

        </div>
    )
}
