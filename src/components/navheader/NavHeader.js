import React from 'react'
import logo from '../../media/resideal.png';
import './Header.css';
import { Box, Grid } from 'grommet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InlineItem = styled.li`
  display: inline;
  margin: 1em;
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;

const NavHeader = (color) => {
  return (
    <Grid 
        columns={["flex",["large","xlarge"],"flex"]} 
        rows={["auto"]} 
        areas={[{"name":"center","start":[1,0],"end":[1,0]}]}>
      <Box
        direction='row'
        align='center'
        justify='between'
        background='color'
        gridArea="center"
        flex={false}
        >
        <ul>
          <InlineItem><StyledLink to='/'>Buy</StyledLink></InlineItem>
          <InlineItem><StyledLink to ='/rent'>Rent</StyledLink></InlineItem>
          <InlineItem><StyledLink to ='/'>Sell</StyledLink></InlineItem>
        </ul>
        <img src={logo} alt="logo" className="image" />
        <ul className="userFeatures">
          <InlineItem><StyledLink to ='/'>Saved homes</StyledLink></InlineItem>
          <InlineItem><StyledLink to ='/'>Saved searches</StyledLink></InlineItem>
          <InlineItem><StyledLink to ='/'>Log in/Sign up</StyledLink></InlineItem>
        </ul>
      </Box>
    </Grid>
  )
}

export default NavHeader;
