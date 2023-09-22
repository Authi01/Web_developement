import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            {product.title} -{" "}
            <span className="cart-price">${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
