import React, { useEffect, useState } from 'react';
import './MyOrders.css'

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('https://shopper-ecommerce-website-backend.onrender.com/myorders', {
        headers: {
          'auth.token': localStorage.getItem('auth.token'), 
        },
      });
      const data = await response.json();
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  return (
    <div className="myorders">
      <h1 className='title'>My Orders</h1>
      <hr />
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="myorders-container">
          {orders.map((order) => (
            <div key={order._id} className="order">
              <div className="order-header">
                <p>Order ID: {order._id}</p>
                <p className="order-status">Status: {order.status}</p>
              </div>
              <ul className="order-items">
                {order.items.map((item, index) => (
                  <li key={index} className="order-item">
                    <img src={item.image} alt="Product" />
                    <div className="item-details">
                      <p>Quantity: {item.quantity}</p>
                      <p>Price per item: ${item.new_price}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p>Total Amount: <b>${order.totalAmount}</b> </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default MyOrders;
