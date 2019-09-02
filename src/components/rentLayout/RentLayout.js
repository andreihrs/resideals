import React, { Component } from 'react';
import GMap from '../gmap/GMap';
import Container from 'react-bootstrap/Container';
import Header from '../header/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './RentLayout.css';
import FiltersBar from '../filters/FiltersBar';
import ListingsList from '../listingsList/ListingsList';

export default class RentLayout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FiltersBar />
        <ListingsList />
        <GMap className="item-a"/>
      </div>
    )
  }
}
