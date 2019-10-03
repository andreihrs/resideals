import React from 'react';
import { Anchor, Box, Grid, Image, Stack, Text } from 'grommet';
import styled from 'styled-components';

const StyledAnchor = styled(Anchor)`
  text-decoration: none;
`;

const GridDiv = styled(Box)`
  display: grid;
`;

const GridImg = styled(Box)`
  grid-column: 1;
  grid-row: 1 / 4;
`;

const GridTxt = styled(Box)`
  grid-column: 1;
  grid-row: 1;
`

const GridCta = styled(Box)`
  grid-column: 1;
  grid-row: 3;
`;


const Neighborhood = ({ imag, isFiveMultiple }) => {
  return (
    // fill vertical, vertical -> fit - cover ca sa maresc ambele div uri si sa maresc imaginea
    // Am facut cu grid ca sa impart imaginea in 3 si sa pun text peste 
      <GridDiv> 
        <GridImg >
        <Image src={imag}/>
        </GridImg>
        <GridTxt>
        <Text color="white" margin="1rem" size="large">Dorobanti</Text>  
        </GridTxt>
        <GridCta>
          <StyledAnchor color="white" margin="1rem" size="large" href="/neighborhood" >Check the Neighborhood</StyledAnchor>
        </GridCta>
      </GridDiv>
  )
}

export default Neighborhood;
