import React, { Component } from 'react'
import './FiltersBar.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Box, Button, DropButton, Heading, Text } from 'grommet';
import { Close } from 'grommet-icons';

export default class FiltersBar extends Component {
  render() {
    return (
      <div className="filtersBar">
        <ButtonToolbar aria-label="Toolbar with button ToolButtonToolbars" >
        <Button
          label="Edit"
          onClick={() => {}}
        />
          <DropButton
            label='Choose'
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
        </ButtonToolbar>
      </div>
    )
  }
}
