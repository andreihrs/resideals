import React from 'react'
import logo from '../../media/resideal.png';
import Container from 'react-bootstrap/Container';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li><a href="#">Buy</a></li>
        <li><a href="#">Rent</a></li>
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
