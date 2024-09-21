import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const clearCart = async () => {
    try {
      const response = await fetch('https://shopper-ecommerce-website-backend.onrender.com/clearcart', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth.token')}`,
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.success) {
        console.log('Cart cleared successfully');
      } else {
        console.error('Failed to clear cart:', result.message);
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const handlePayment = async () => {
    const response = await fetch('https://shopper-ecommerce-website-backend.onrender.com/processpayment', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth.token')}`,
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        cardNumber,
        expiryDate,
        cvv,
        amount: getTotalCartAmount(),
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log('Payment successful, clearing cart...');
      await clearCart();
      navigate('/payment-success');
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="payment">
        <div className="payment-form">
        <h1 className='title'>Enter Payment Details</h1>
        <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
        />
        <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
        />
        <button onClick={handlePayment}>Pay ${getTotalCartAmount()}</button>
        </div>
    </div>
  );
};

export default Payment;
