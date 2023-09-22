import React, { useState } from "react";
import "./Productgrid.css";
import products from "../Utils/products";
import Cart from "../components/Cart";

const ProductGrid = () => {
  const [flippedProduct, setFlippedProduct] = useState({ id: null });
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      <button onClick={toggleCartVisibility}>View Cart</button>{" "}
      {isCartVisible && <Cart cart={cart} />}
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${
              flippedProduct.id === product.id ? "flipped" : ""
            }`}
          >
            <div
              className="card-front product-card"
              style={{ marginTop: "50px" }}
            >
              <img
                src={product.image01}
                alt={product.title}
                onClick={() => setFlippedProduct(product)}
              />
              <h3 style={{ marginTop: "-70px" }}>{product.title}</h3>
              <p
                className="price"
                style={{ marginTop: "0px", marginRight: "10px" }}
              >
                ${product.price.toFixed(2)} {"     "}
                <button
                  className="add-to-cart-button price"
                  style={{ marginTop: "10px" }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </p>
            </div>

            <div className="card-back">
              <h2>{product.title}</h2>
              <img src={product.image02} alt={product.title} />
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
