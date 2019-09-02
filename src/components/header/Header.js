import React from 'react'
import logo from '../../media/resideal.png';
import Container from 'react-bootstrap/Container';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li><Link to='/'>Buy</Link></li>
        <li><Link to ='/rent'>Rent</Link></li>
        <li><a href="#">Sell</a></li>
      </ul>
      <img src={logo} alt="logo" className="image" />
      <ul className="userFeatures">
        <li><a href="#">Saved homes</a></li>
        <li><a href="#">Saved searches</a></li>
        <li><a href="#">Log in/Sign up</a></li>
      </ul>
    </nav>
  )
}

export default Header;
