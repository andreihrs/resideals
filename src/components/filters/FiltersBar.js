import React, { Component } from 'react'
import './FiltersBar.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default class FiltersBar extends Component {
  render() {
    return (
      <div className="filtersBar">
        <ButtonToolbar aria-label="Toolbar with button ToolButtonToolbars" >
          <Button>1</Button>
          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}
