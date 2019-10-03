import React from 'react'
import Neighborhood from './neighborhood/Neighborhood';
import { Box, Button } from 'grommet';
import apartment from './../../../media/apartments.jpg';
import unsplash from './../../../media/unsplash.jpg'
import neighborhood1 from './../../../media/listing1.jpg'
import neighborhood2 from './../../../media/listing2.jpg'
import { Next, Previous } from 'grommet-icons';

const nextSlide = (imgIndex) => {
  const lastIndex = 5;
  const resetIndex = imgIndex === 0;
  const index = resetIndex ? 0 : imgIndex + 1;
};

const prevSlide = (imgIndex) => {
  const lastIndex = 5;
  const resetIndex = imgIndex === 0;
  const index = resetIndex ? lastIndex : imgIndex - 1;
};

const neighborSection = () => {
  let currentImageIndex = 0;
  return (
    <Box
      align="stretch"
      direction="row"
      gap="small"
      justify="stretch"
      round="small"
      overflow="hidden">
        <Box alignSelf="center" margin={{right: "1rem"}}>
          <Button>
          <Previous />
          </Button>
        </Box>
        <Box>
        <Neighborhood imag={apartment}/>
        </Box>
        <Neighborhood imag={unsplash}/>
        <Neighborhood imag={apartment}/>
        <Neighborhood imag={unsplash}/>
        <Neighborhood imag={neighborhood1} />
        <Box alignSelf="center" margin={{right: "1rem"}}>
        <Next />
        </Box>
        {/* <Neighborhood imag={neighborhood2} /> */}
      </Box>
  )
}


export default neighborSection
