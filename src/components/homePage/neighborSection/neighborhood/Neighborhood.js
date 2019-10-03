import React from 'react';
import { Box, Grid, Image, Stack, Text } from 'grommet';
import styled from 'styled-components';

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


const Neighborhood = ({ imag }) => {
  return (
      <GridDiv>
        <GridImg>
        <Image src={imag}  />
        </GridImg>
        <GridTxt>
        <Text color="white" margin="1rem" size="large">Dorobanti</Text>  
        </GridTxt>
        <GridCta>
          <Text color="white" margin="1rem" size="large">Check the Neighborhood</Text>
        </GridCta>
      </GridDiv>
  )
}

export default Neighborhood;
