import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart = [], removeFromCart }) {
  const total = Array.isArray(cart) ? cart.reduce((sum, product) => sum + product.price, 0) : 0;
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('auth');

  useEffect(() => {
    if (!isAuthenticated) {
      alert('Please sign in');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='container back'>
      <h2 className='text-center'>Welcome to Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li className='container' key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <div style={{ flexGrow: 1 }} className='border fw-bold'>
                {item.name} - Price: ${item.price}
              </div>
              <button className='btn btn-success' onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', padding: '5px 10px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className='bg-primary text-white text-center'>Total: ${Math.ceil(total)}</h3>
    </div>
  );
}

export default Cart;
