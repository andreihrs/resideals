import React from 'react';
import './App.css';
import NavHeader from './components/navheader/NavHeader';
import Hero from './components/hero/Hero';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/Footer';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext, Text } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';


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
  constructor() {
    super();
    this.state = {
      showSidebar: true
    }
  }  

  render() {
    return(
      // <HomePage />
      <Grommet theme={theme} full>
        <NavHeader color="brand"/>
        <Hero />
        <Box
          align="center"
          pad="large">
          <h1>Explore the neighborhoods</h1>
          <Text> Take a deep dive and see what awaits you on the other side </Text>
        </Box>
        <Box a11yTitle="neighborhood cards">
          
        </Box>
        <Footer />
      </Grommet>
    );
  }
}

export default App;
