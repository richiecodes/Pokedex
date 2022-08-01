import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import pokeball from '../../assets/images/pokeball.svg'
const Navbar = () => {
  return (
    <nav className='container'>
      <Link to='/' className='nav-header'>
        <img src={pokeball} alt='logo' />
        <h1>Pokédex</h1>
      </Link>
      <ul className='nav-links'>
        <Link to='/random' className='nav-link'>
          <li>Random Pokémon</li>
        </Link>
        <Link to='/search' className='nav-link'>
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar