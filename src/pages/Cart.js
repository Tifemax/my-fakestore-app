import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, total, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const { user } = useContext(UserContext);  // Access user context
  const navigate = useNavigate();

  // Check if the user is logged in
  if (!user) {
    alert("Please log in to view your cart.");
    navigate('/login');  // Redirect to login page
    return null;  // Return null to avoid rendering the cart content
  }

  return (
    <div className='container my-5'>
      <h2 className='text-center'>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='list-unstyled'>
          {cart.map((item) => (
            <li key={item.id} className='d-flex align-items-center mb-3'>
              <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <div className='border fw-bold flex-grow-1'>
                {item.title} - Price: ${item.price.toFixed(2)}
              </div>
              <div className='me-5'>
                <button className='btn btn-primary fw-bold me-2' onClick={() => decrementQuantity(item.id)}>-</button>
                <button className='btn bg-white me-2'>X{item.quantity}</button>
                <button className='btn btn-success fw-bold me-2' onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button 
                className='btn btn-success ms-2' 
                onClick={() => removeFromCart(item.id)}
                style={{ padding: '5px 10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className='bg-primary text-white text-center p-2'>
        Total: ${total.toFixed(2)}
      </h3>
    </div>
  );
}

export default Cart;
