import React from 'react'

export default function Cart(props) {
    const cart = props.cart

    const total = cart.reduce((total, item) => total + item.price, 0).toFixed(2)
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
    } else if(total > 0 ){
        shipping = 12.99
    }
    const subTotal = (Number(total) + Number(shipping)).toFixed(2)
    

    return (
        <div>
        <h4>Order Summary</h4>
        <p>Items Order: {cart.length}</p>
        <p>Product Price: ${total}</p>
        <p>Shipping Charge: ${shipping}</p>
        <p>Total Price: $ {subTotal}</p>
        </div>
    )
}
