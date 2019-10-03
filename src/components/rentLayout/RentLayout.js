import React from 'react';
import GMap from './gmap/GMap';
import NavHeader from '../navheader/NavHeader';
import { Box } from 'grommet';
import FiltersBar from './filters/FiltersBar';
import ListingsList from './listingsList/ListingsList';
import Footer from './../footer/Footer';

 const RentLayout = () => {
    return (
      <Box
        fill="vertical"
        overflow={{"vertical": "hidden"}}
      >
        <NavHeader />
        <Box style={{className: "areyoufirst"}}>
          <FiltersBar />
        </Box>
        <Box
          direction="row"
          fill="horizontal"
          overflow="hidden"
        >
          <Box 
            width="40%"
            overflow="hidden"
          >
              <GMap/>
          </Box>
          <Box margin="15px" width="60%" overflow={{"vertical": "scroll"}}>
            <ListingsList />
            <Footer />
          </Box>
        </Box>
      </Box>
    );
}

export default RentLayout;
