import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

export default function Header() {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img src={logo} alt="LOGO" />
      <nav>
        <NavLink activeClassName="selected" to="/shop">Shop</NavLink>
        <NavLink activeClassName="selected" to="/review">Review Orders</NavLink>
        <NavLink activeClassName="selected" to="/inventory">Manage Inventory</NavLink>
        {
          user.email && <span style={{ color: 'white', marginRight: '10px' }}>Welcome {user.displayName}</span>
        }
        {
          user.email ? <button onClick={logOut}>Log Out</button> : <NavLink activeClassName="selected" to="/login">Login</NavLink>
        }
      </nav>
    </div>
  )
}
