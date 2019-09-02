import React from 'react'
import Container from 'react-bootstrap/Container';
import apartments from '../../media/apartments.jpg';
import './Hero.css';
import SearchBar from '../searchBar/SearchBar';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <Container className="imagine" fluid={true}>
       <img src={apartments} className="imag"/>
       <Col md={6}>
          <h1 className="title">Find the right appartment for you!</h1>
          <SearchBar className="search"/>
       </Col>
    </Container>
    
  )
}

export default Hero
