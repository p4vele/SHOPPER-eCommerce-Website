import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const {getTotalCartAmount}= useContext(ShopContext);
    const navigate = useNavigate();
  return (
    <div className='placeorder'>
      <div className='placeorder-container'>
        <div className="placeorder-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Adress'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
        </div>
        <div className="placeorder-right">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={()=> navigate('/payment')}>PROCCED TO PAYMENT</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder