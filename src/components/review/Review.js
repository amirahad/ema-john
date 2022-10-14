import React from 'react'
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts'
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Review = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeProduct = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    const handleClick = () => {
        setCart([])
        clearTheCart()
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.length === 0 ? <h1>Cart is empty. Add Some Prodects......</h1> :
                        cart.map(product =>
                            <ReviewItem
                                key={product.key}
                                product={product}
                                removeProduct={removeProduct}
                            />
                        )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/placeorder">
                        <button className="product-button" onClick={handleClick}>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    )
}

export default Review
