import React from 'react';
import GMap from './gmap/GMap';
import NavHeader from '../navheader/NavHeader';
import { Box, Button, Layer } from 'grommet';
import FiltersBar from './filters/FiltersBar';
import ListingsList from './listingsList/ListingsList';
import Footer from './../footer/Footer';
import { Close } from 'grommet-icons';

 const RentLayout = (props) => {
  const [show, setShow] = React.useState();
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
            <ListingsList title={props.title}/>
            <Footer />
            <ListingsList title={props.title}/>
          </Box>
        </Box>
        <Box>
      <Button label="show" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          full="true"
          margin={{right: 'xlarge', left: 'xlarge'}}
        >
          <h1>Overview</h1>
          <Button style={{position: 'absolute', top: '0', right: '0'}} onClick={() => setShow(false)}>
            <Close />
          </Button>
        </Layer>
      )}
    </Box>
      </Box>
    );
}

export default RentLayout;
