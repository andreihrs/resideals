import React from 'react';
import { FormSearch } from 'grommet-icons';
import { Box, Stack, TextInput } from 'grommet';

const SearchBar = () => {
  const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

  const [value, setValue] = React.useState("");

  const onChange = event => setValue(event.target.value);
  const onSelect = event => setValue(event.suggestion);

  var styleForm = {
    background: '#FFF',
    width: '100%',
    height: '40px',
    borderRadius: '5px',
    margin: '0',
    marginTop: '22%',
  };

  return (
    <Box width='medium'>
       <TextInput 
        value={value}
        onChange={onChange}
        onSelect={onSelect}
        suggestions={suggestions}
        style={styleForm}
        dropProps={{ height: "small" }}
        placeholder="Enter the city, neighborhood or public transport" />
       <FormSearch color='black' />
    </Box>
  )
}

export default SearchBar;
