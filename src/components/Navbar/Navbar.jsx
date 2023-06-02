import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import { useState } from 'react'
import { MdOutlineFlare } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/features/auth/authSlice'

const Navbar = () => {

  const dispatch = useDispatch()
  const { admin } = useSelector(state => state.auth)

  return (
    <nav className='Navbar'>
      <div className="logo">
        <MdOutlineFlare />
        <Link to="/" className='logo'>CMS</Link>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Products</NavLink></li>
        <li><NavLink to="/add" className="nav-link">Add Product</NavLink></li>
        <li><NavLink to="/orders" className="nav-link">Orders</NavLink></li>
        <li><NavLink onClick={() => dispatch(logout())} to="/login" className="nav-link">{admin ? 'Logout' : 'Login'}</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar