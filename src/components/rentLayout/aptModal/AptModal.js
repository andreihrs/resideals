import React from 'react'
import { Button, Layer } from 'grommet';
import { Close } from 'grommet-icons'

const AptModal = (props) => {
  const handleClick = (show) => {
    props.setShow(!show);
  }

  return (
    <Layer
      onEsc={() => handleClick(props.show)}
      onClickOutside={() => handleClick(props.show)}
      full="true"
      margin={{right: 'xlarge', left: 'xlarge'}}
    >
      <h1>Overview</h1>
      <Button style={{position: 'absolute', top: '0', right: '0'}} onClick={() => handleClick(props.show)}>
        <Close />
      </Button>
    </Layer>
  )
}

export default AptModal
