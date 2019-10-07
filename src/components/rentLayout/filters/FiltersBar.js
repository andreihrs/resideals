import React, { Component } from 'react'
import { Box, Button, DropButton, Heading, Text, TextInput } from 'grommet';
import { Close } from 'grommet-icons';
import styled from 'styled-components'

const FiltersButton = styled(DropButton)`
  border-radius: 0%;
  width: 15vw;
  border-color: black;
`

const FiltersBar = () => {
  const [value, setValue] = React.useState('');

  return (
    <Box 
      direction="row" 
      gap="small" 
      margin="10px" 
      justify="between" 
      height="3.1rem">
      <TextInput
        placeholder="type here"
        value={value}
        onChange={event => setValue(event.target.value)}
        style={{width: '20vw'}}
      />
      <FiltersButton
        label='More'
        dropContent={(
          <Box pad='small'>
            <Box direction='row' justify='between' align='center'>
              <Heading level={3} margin='small' >Heading</Heading>
              <Button
                icon={<Close />}
              />
            </Box>
            <Text>Content</Text>
          </Box>
        )}  
      />
      <FiltersButton
        label="Price" />
      <FiltersButton
        label="Home Type" />
      <Button
        label="Save Search"
        onClick={() => {}}
      />
    </Box>
  )
}

export default FiltersBar