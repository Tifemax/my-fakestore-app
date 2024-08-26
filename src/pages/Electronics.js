import React, { useState } from 'react';
import Electo from '../components/Electo'; // Adjust the import path as necessary
import Cart from './Cart'; // Adjust the import path as necessary

function Electronics() {
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
      <h1>My Store</h1>
      <Electo addToCart={addToCart} />
      {/* <Cart cart={cart} removeFromCart={removeFromCart} total={total} /> */}
    </div>
  );
}

export default Electronics;
