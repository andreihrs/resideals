import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid={true} className="app">
      <Header value="alphabetical" />
      <Hero /> 
    </Container>
  );
}

export default App;
