import React from 'react'
import { Box, Image } from 'grommet'
import NavHeader from './../navheader/NavHeader'
import GMap from './../rentLayout/gmap/GMap'
import neighborhood1 from '../../media/unsplash.jpg'
import styled from 'styled-components'
import { Clipboard, Money, Train } from 'grommet-icons'


const GridBox = styled(Box)`
  display: grid;
  width: 50vw;
  height: auto;
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

const SubTitle = styled.h4`
  grid-column: 1;
  grid-row: 2;
  color: white;
`;

const Container = styled(Box)`
  margin-top: 10px;
  margin-left: 7%;
  margin-right: 7%;
`

const NeighborhoodPage = () => {
  return (
    <Box>
      <NavHeader />
      <Container>
        <Box direction="row">
          <GridBox>
              <GridImg src={neighborhood1} fit="cover"/>
              <Title>Herastrau</Title>
              <SubTitle>Bucuresti</SubTitle>
          </GridBox>
          <Box>
            <h1>Neighborhood overview</h1>
            <Box direction="row" gap="xlarge">
              <Box direction="column">
                <Box direction="row" gap="small">
                  <Money />
                  <p>Buy price</p>
                </Box>
                <Box direction="row" gap="small">
                  <Clipboard />
                  <p>Rent price</p>
                </Box>
              </Box>
              <Box direction="column">
                <Box direction="row" gap="small">
                  <p>Homes for sale</p>
                </Box>
                <Box direction="row" gap="small">
                  <p>Homes for rent</p>
                </Box>
              </Box>
            </Box>
            <Box>
                <Box direction="row" gap="small">
                  <Train />
                  <p>Traffic data</p>
                </Box>
                <Box>
                  <p>Main streets</p>
                  <Image></Image>
                </Box>
              </Box>
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
      </Container>
    </Box>
  )
}

export default NeighborhoodPage;
