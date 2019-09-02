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
      <Container className="full-width">
        <Header />
        <hr />
        <Row>
          <FiltersBar />
        </Row>
        <hr />
        <Row>
          <Col md={6} className="map">
            <div className="ml-30">
            <GMap />
            </div>
          </Col>
          <Col md={6}>
            <ListingsList />
          </Col>  
        </Row>
      </Container>
    )
  }
}
