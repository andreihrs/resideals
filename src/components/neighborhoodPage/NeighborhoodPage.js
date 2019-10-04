import React from 'react'
import { Box, Image } from 'grommet'
import NavHeader from './../navheader/NavHeader'
import GMap from './../rentLayout/gmap/GMap'
import neighborhood1 from '../../media/unsplash.jpg'
import styled from 'styled-components'

const GridBox = styled(Box)`
  display: grid;
  width: 50vw;
  height: 50vh;
  margin: 10px;
`

const GridImg = styled(Image)`
  grid-column: 1; 
  grid-row: 1 / 4;
`;

const Title = styled.h1`
  grid-column: 1;
  grid-row: 1;
  color: white;
`;

const SubTitle = styled.h2`
  grid-column: 1;
  grid-row: 2;
  color: white;
`;

const NeighborhoodPage = () => {
  return (
    <Box>
      <NavHeader />
      <Box>
        <Box>
          <GridBox>
            <GridImg src={neighborhood1}/>
            <Title>Herastrau</Title>
            <SubTitle>Bucuresti</SubTitle>
          </GridBox>
        </Box>
        <Box>
          <h1>Neighborhood overview</h1>
          <p>Buy price</p>
          <p>Rent price</p>
          <p>Homes for sale</p>
          <p>Homes for rent</p>
          <p>Traffic data</p>
          <p>Street photos</p>
        </Box>
      </Box>
      <Box>
        <h1>Explore the area</h1>
        <p>Restaurants Groceries Nightlife Cafes Shoopping Art & Entertainment Fitness</p>
        {/* <GMap /> */}
        <h1>Placeholder for map</h1>
      </Box>
      <Box>
        <h1>What locals say</h1>
        <p>Dog friendly / Sidewalks / Car is needed / Streets are well-lit / It's walkable to traffic stations</p>
      </Box>
      <Box>
        <h1>Reviews by certain population segments</h1>
      </Box>
      <Box>
        <h1>Safety and crime</h1>
        <h1>Noise </h1>
      </Box>
      <Box>
        <h1>Nearby neighboords in Bucharest</h1>
      </Box>
    </Box>
  )
}

export default NeighborhoodPage;
