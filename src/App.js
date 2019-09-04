import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import HomePage from './components/homePage/homePage';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const AppBar = (props) => (
  <Box 
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{zIndex: '1'}}
    {...props}
  />
);


const theme = {
  global: {
    colors: {
      brand: '#FFFFFF',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends React.Component {
  state = {
    showSidebar: false,
  }
  
  render() {
    return (
      <Grommet theme={theme} full>
        <AppBar>
          <Heading level='3' margin='none'>RESIDEALS</Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
          <Box
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center'>
              sidebar
          </Box>
        </Box>
        {/* <HomePage /> */}
      </Grommet>
    );
  }
}

export default App;
