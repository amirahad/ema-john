import React from 'react'

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;



    return (
        <div>
            {/* <div className="image">
                <img src={img} alt={name} />
            </div> */}
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Quantity: {quantity}</p>
                <p><small>${price}</small></p>
                <br />
                <button onClick={() => props.removeProduct(key)} className="product-button">Remove</button>
                <hr />
            </div>
        </div>
    )
}

export default ReviewItem
