import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

  const [menu,setMenu]= useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p> SHOPPER </p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=> {setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop"?<hr/> : <></>}</li>
            <li onClick={()=> {setMenu("mens")}}><Link to='/mens'>Men</Link> {menu==="mens"?<hr/> : <></>}</li>
            <li onClick={()=> {setMenu("womens")}}><Link to='/womens'>Women</Link> {menu==="womens"?<hr/> : <></>}</li>
            <li onClick={()=> {setMenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids"?<hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth.token') ? (
            <>
              <Link to="/my-orders"><button>My Orders</button></Link>
              <button onClick={() => {localStorage.removeItem('auth.token'); window.location.replace('/');}}>Logout</button>
            </>
          ) : (
            <Link to="/login"><button>Login</button></Link>)}
          <Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>
          {getTotalCartItems() > 0 && (<div className="nav-cart-count">{getTotalCartItems()}</div>)}
        </div>

    </div>
  )
}
