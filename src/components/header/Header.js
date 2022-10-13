import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="LOGO" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review Orders</Link>
        <Link to="/inventory">Manage Inventory</Link>
      </nav>
    </div>
  )
}
