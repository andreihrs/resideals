import React from 'react';
import './SearchBar.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const SearchBar = () => {
  var styleForm = {
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    zIndex: 100,
    margin: '0',
    marginTop: '22%',
  };

  return (
    <>
       <Form.Control type="text" placeholder="Enter an address, neighborhood or city" class="search-bar" style={styleForm}/>
       <i class="fa fa-search" style={{zIndex: 300, color: 'black'}}></i>
    </>
  )
}

export default SearchBar;
