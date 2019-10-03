import React from 'react';
import { Box, Heading, InfiniteScroll, Text } from 'grommet';
import listing1 from './../../../media/listing1.jpg';
import listing2 from './../../../media/listing2.jpg'
import listing3 from './../../../media/listing3.jpg'
import CardListing from './cardListing/CardListing';
import styled from 'styled-components';

const ColImg = styled(Box)`
  width: 50%;
`;

const ListingsList = (props) => {
  const allListings = [
    {
      id: "1",
      pricing: "$15000",
      address: "Sector 3, Matei Basarab, nr. 14",
      rooms: "1bd",
      bathrooms: "1ba",
      niceInfo: "2 min Metro Station",
      date: new Date("09/13/2019"),
      image: listing1
    },
    {
      id: "2",
      pricing: "$5000",
      address: "Sector 1, Bd. Dorobanti, nr. 3",
      rooms: "3bd",
      bathrooms: "1ba",
      niceInfo: "Parc Herastrau",
      date: new Date("10/01/2019"),
      image: listing2
    },
    {
      id: "3",
      pricing: "$65000",
      address: "Sector 3, P-ta Iancului, nr. 5",
      rooms: "3bd",
      bathrooms: "1ba",
      niceInfo: "2 min Metro Station",
      date: new Date("07/03/2019"),
      image: listing3
    },
    {
      id: "4",
      pricing: "$15000",
      address: "Sector 3, Matei Basarab, nr. 14",
      rooms: "1bd",
      bathrooms: "1ba",
      niceInfo: "2 min Metro Station",
      date: new Date("09/13/2019"),
      image: listing1
    },
  ];

  return (
    <Box width="100%" direction="column" >
      <Heading level="3">Real Estate & Homes for {props.title}</Heading>
      <Text>{allListings.length} results</Text>
      <Box direction="row-responsive" wrap="true">
      <InfiniteScroll items={allListings}>
      {(item, index) => (
        <Box
          pad="small"
          key={index}
          direction="row"
        >
          <CardListing
            key={item.id} 
            home={item}  />
        </Box>      
      )}
    </InfiniteScroll>
    </Box>
    <Box direction="row-responsive" wrap="true">
      <InfiniteScroll items={allListings}>
      {(item, index) => (
        <Box
          pad="small"
          key={index}
          direction="row"
        >
          <CardListing
            key={item.id} 
            home={item}  />
        </Box>      
      )}
    </InfiniteScroll>
    </Box>
    </Box>
  )
}

export default ListingsList