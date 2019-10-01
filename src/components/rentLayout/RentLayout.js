import React, { Component, useState } from 'react';
import GMap from '../gmap/GMap';
import NavHeader from '../navheader/NavHeader';
import { Grid, Box, Button, Text } from 'grommet';
import FiltersBar from '../filters/FiltersBar';
import ListingsList from '../listingsList/ListingsList';
import styled from 'styled-components';

 const RentLayout = () => {
    return (
      <Box>
        <NavHeader />
        <Box>
          <FiltersBar />
        </Box>
        <Box>
          <GMap />
        </Box>
        <Box>
          <ListingsList />
        </Box>
      </Box>
    );
}

export default RentLayout;
