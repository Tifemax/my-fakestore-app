import React, { useState } from 'react';
import Jewe from '../components/Jewe'; // Adjust the import path as necessary
// import Cart from './Cart'; // Adjust the import path as necessary

function Jewelry() {
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
      <h1>Jewelry Store</h1>
      <Jewe addToCart={addToCart} />
      {/* <Cart cart={cart} removeFromCart={removeFromCart} total={total} /> */}
    </div>
  );
}

export default Jewelry;