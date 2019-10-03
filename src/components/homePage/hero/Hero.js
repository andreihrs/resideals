import React from 'react'
import apartments from '../../../media/apartments.jpg'
import SearchBar from '../../searchBar/SearchBar';
import { Box, Stack } from 'grommet';
import styled from 'styled-components';

const StyledStack = styled(Stack)`
  height: 25rem;
`;

const Title = styled.h1`
  color: #FFFFFF;
  margin-top: 15%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Hero = () => {
  return (
    <StyledStack anchor='center' fill='true' guidingChild='first'>
       <Image src={apartments} className="imag"/>
       <Box>
          <Title className="title">Find the right appartment for you!</Title>
          <SearchBar className="search"/>
       </Box> 
    </StyledStack>
    
  )
}

export default Hero
