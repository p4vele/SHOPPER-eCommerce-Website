import React, { useState, useEffect } from 'react';
import './Orders.css';
import cross_icon from '../../assets/cross_icon.png';

const Orders = () => {
  const [allorders, setallorders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch('http://localhost:4000/allorders');
    const data = await res.json();
    setallorders(data.orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const removeOrder = async (id) => {
    await fetch('http://localhost:4000/removeorder', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    await fetchOrders();
  };

  const updateOrderStatus = async (id, status) => {
    await fetch('http://localhost:4000/updatestatus', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    });
    await fetchOrders();
  };

  return (
    <div className='orderslist'>
      <h1>All Orders List</h1>
      <div className="orderslist-format-main">
        <p>User</p>
        <p>Total</p>
        <p>Items</p>
        <p>Status</p>
        <p>Remove</p>
      </div>
      <div className="orderslist-allorders">
        <hr />
        {allorders.map((order) => (
          <React.Fragment key={order._id}>
            <div className="orderslist-format-main orderslist-format">
              <p>{order.userId.name} ({order.userId.email})</p>
              <p>${order.totalAmount}</p>

              <ul className="order-items">
                {order.items.map((item, index) => (
                  <li key={index} className="order-item">
                    <img src={item.image} alt="Product" />
                    <div className="item-details">
                      <p>{item.quantity} x {item.name}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order._id, e.target.value)}
              >
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <img
                onClick={() => removeOrder(order._id)}
                src={cross_icon}
                alt="Remove Order"
                className="orderslist-remove-icon"
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Orders;
