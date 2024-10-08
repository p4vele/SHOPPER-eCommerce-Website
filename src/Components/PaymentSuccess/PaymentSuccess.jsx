import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccess.css'

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-success">
      <div className="payment-success-container">
        <div className="title">
            <h1>Payment Successful!</h1>
        </div>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
        <button onClick={() => navigate('/my-orders')}>View My Orders</button> 
        <button onClick={() => navigate('/')}>Return to Home</button> 
      </div>
    </div>
  );
};

export default PaymentSuccess;
