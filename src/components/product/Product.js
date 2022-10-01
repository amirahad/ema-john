import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";



export default function Product(props) {
    const { name, seller, img, price, stock } = props.product;
    // const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
    return (
        <div className='product'>
            <div className="image">
                <img src={img} alt={name} />
            </div>
            <div className="product-info">
                <h5 className='product-title'>{name}</h5>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                {stock > 0 ? <span>In Stock</span> : <span>Out of Stock</span>}
                {price > 200 ? <span>Free Shipping</span> : null}
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className='product-button'>
                    <FontAwesomeIcon icon={faCartArrowDown} /> Add to cart</button>
            </div>
        </div>
    )
}
