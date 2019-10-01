// import { CardListing } from '../cardListing/CardListing';
import React from 'react';
import { Box, InfiniteScroll, Text } from 'grommet';

const ListingsList = () => {
  let words = ["Hello", "World", "How are you?"];
  
  return (
    <Box overflow="auto">
      <InfiniteScroll items={[1, 2, 3, 4, 5, 6, 7]}>
      {(item) => (
        <Box
          flex={false}
          pad="medium"
          background={`dark-${(item % 3) + 1}`}
        >
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
      {/* {words.map(item => 
        <CardListing value={item} key={item}/>)} */}
    </Box>
  )
}

export default ListingsList