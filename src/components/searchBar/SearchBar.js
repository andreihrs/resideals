import React from 'react';
import { FormSearch } from 'grommet-icons';
import { Box, Grid, TextInput } from 'grommet';
import styled from 'styled-components';

const GridBox = styled(Box)`
  display: grid;
`

const GridText = styled(Box)`
  grid-column: 1 / 4;
  grid-row: 1 / 4;
`

const GridIcon = styled(Box)`
  z-index: 100;
  grid-column: 3;
  grid-row: 2 / span 1;
`

const SearchBar = () => {
  const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

  const [value, setValue] = React.useState("");

  const onChange = event => setValue(event.target.value);
  const onSelect = event => setValue(event.suggestion);

  var styleForm = {
    background: '#FFF',
    height: '40px',
    borderRadius: '5px',
    margin: '0',
  };

  return (
    <GridBox margin={{left: '50px'}}>
      <GridText overflow="auto" width="80%">
       <TextInput 
        size="small"
        value={value}
        onChange={onChange}
        onSelect={onSelect}
        suggestions={suggestions}
        style={styleForm}
        dropProps={{ height: "small" }}
        placeholder="Enter the city, neighborhood or public transport" />
      </GridText>
        <GridIcon>
       <FormSearch color='black' size="medium" />
       </GridIcon>
    </GridBox>
  )
}

export default SearchBar;
