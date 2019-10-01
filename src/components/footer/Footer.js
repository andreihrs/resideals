import React from 'react'
import { Anchor, Box, Grid, Text } from 'grommet'

const Footer = () => {
  return (
    <Grid 
      columns={["flex",["large","xlarge"],"flex"]} 
      rows={["auto"]} 
      areas={[{"name":"center","start":[1,0],"end":[1,0]}]}>
        <Box 
          align="center" 
          justify="between" 
          pad="medium" 
          direction="row" 
          flex={false} 
          gridArea="center">
          <Text>
            © Copyright
          </Text>
          <Box align="center" direction="row">
            <Anchor label="anchor" margin="small" />            <Anchor label="anchor" margin="small" />
          </Box>
        </Box>
      </Grid>
  )
}

export default Footer
