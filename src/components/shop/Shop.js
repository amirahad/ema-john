import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";

export default function Shop() {
  // const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => {
            return (
              <Product
                handleAddProduct={handleAddProduct}
                key={product.key}
                product={product}
              />
            );
          })}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}
