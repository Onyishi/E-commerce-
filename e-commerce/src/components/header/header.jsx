import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
  return (
    <nav className='nav-menu container'>
      <dev className='logo'>
        <Link to='/'>NOMAD</Link>
      </dev>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/shop'>
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
