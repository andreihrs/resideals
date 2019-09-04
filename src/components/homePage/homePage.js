import React, { Component } from 'react'
import { Grommet, Box, Grid, Text, Anchor, Heading, Paragraph, Button } from 'grommet'
import { Ad } from 'grommet-icons'
/* import { grommet } from 'grommet-theme-grommet' */

const Marketing = ({ setScreen}) => {
  const [layer, setLayer] = React.useState()
  return (
  <Grommet style={{"height":"100vh"}}>
    <Box style={{"minHeight": "100vh"}} background={{"color":"dark-1"}} style={{"minHeight":"100vh"}} fill="vertical" overflow="auto">
      <Grid columns={["flex",["large","xlarge"],"flex"]} rows={["auto"]} areas={[{"name":"center","start":[1,0],"end":[1,0]}]}>
        <Box align="center" justify="between" pad="medium" flex={false} direction="row" gridArea="center">
          <Box align="center" direction="row" gap="medium">
            <Ad  />
            <Text size="large">
              Title
            </Text>
          </Box>
          <Box align="center" direction="row" gap="small">
            <Anchor label="section" margin="small" />            <Anchor label="section" margin="small" />
          </Box>
        </Box>
      </Grid>
      <Box align="center" justify="center" pad="medium" basis="medium" flex={false} background={{"image":"url('http://www.textures.com/system/gallery/photos/Buildings/High Rise/Night/56310/HighRiseNight0077_600.jpg?v=4')"}}>
        <Heading>
          Section One
        </Heading>
        <Paragraph />
        <Button label="Button" />
      </Box>
      <Box align="center" justify="center" pad="medium" basis="medium" flex={false} background={{"image":"url('http://www.textures.com/system/gallery/photos/Landscapes/City Night/112551/LandscapesCityNight0042_1_600.jpg?v=4')"}}>
        <Heading>
          Section Two
        </Heading>
        <Paragraph />
        <Button label="Button" />
      </Box>
      <Box align="center" justify="center" pad="medium" basis="medium" flex={false} background={{"image":"url('http://www.textures.com/system/gallery/photos/Buildings/High Rise/Night/56329/HighRiseNight0086_600.jpg?v=5')"}}>
        <Heading>
          Section Three
        </Heading>
        <Paragraph />
        <Button label="Button" />
      </Box>
      <Grid columns={["flex",["large","xlarge"],"flex"]} rows={["auto"]} areas={[{"name":"center","start":[1,0],"end":[1,0]}]}>
        <Box align="center" justify="between" pad="medium" direction="row" flex={false} gridArea="center">
          <Text>
            © Copyright
          </Text>
          <Box align="center" direction="row">
            <Anchor label="anchor" margin="small" />            <Anchor label="anchor" margin="small" />
          </Box>
        </Box>
      </Grid>
    </Box>
  </Grommet>
  )
}

const screens = {
  30: Marketing
}

export default () => {
  const [screen, setScreen] = React.useState(30)
  const Screen = screens[screen]
  return <Screen setScreen={setScreen} />
}
