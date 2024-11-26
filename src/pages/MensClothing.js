import React, { useState } from 'react';
import Menscloth from '../components/menscloth';
// import Cart from './Cart'; // Adjust the import path as necessary

function MensClothing() {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Calculate total price
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h1>MensClothing Store</h1>
      {/* <menscloth addToCart={addToCart} /> */}
      <Menscloth addToCart={addToCart}/>
      {/* <Cart cart={cart} removeFromCart={removeFromCart} total={total} /> */}
    </div>
  );
}

export default MensClothing;