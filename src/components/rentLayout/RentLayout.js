import React from 'react';
import GMap from './gmap/GMap';
import NavHeader from '../navheader/NavHeader';
import { Box, Button, Layer } from 'grommet';
import FiltersBar from './filters/FiltersBar';
import ListingsList from './listingsList/ListingsList';
import Footer from './../footer/Footer';
import { Close } from 'grommet-icons';
import AptModal from './aptModal/AptModal';

 const RentLayout = (props) => {
  const [show, setShow] = React.useState(false);

  return (
      <Box
        fill="vertical"
      >
        <Box style={{position: 'fixed'}}>
        <NavHeader />
        </Box>
        <Box style={{position: 'fixed', top: '80px'}}>
          <FiltersBar />
        </Box>
        <Box
          direction="row"
          fill="horizontal"
          overflow="hidden"
          margin={{top: '150px'}}
        >
          <Box 
            width="40%"
          >
              {/* <GMap style={{position: 'fixed'}}/> */}
          </Box>
          <Box margin="15px" width="60%">
            <ListingsList title={props.title} setShow={setShow}/>
            <Footer />
            <ListingsList title={props.title}/>
          </Box>
        </Box>
        <Box>
      {show && 
        <AptModal 
          setShow={setShow}
          show={show}/>}
    </Box>
      </Box>
  );
}

export default RentLayout;
