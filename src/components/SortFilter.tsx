import {Box, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material';
import { useState } from 'react';

export default function SortFilter() {
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, backgroundColor: 'transparent', color: 'text.primary', ml: 2}}>
      <FormControl fullWidth >
        <Select
          value={sortBy}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            backgroundColor: 'transparent',
            color: 'text.primary',
            height: '40px',
            border: '1px solid',
            borderColor: 'text.primary',
            outline: 'none',
            }}
        >
          <MenuItem value="" disabled>
            Sort By
          </MenuItem>
          <MenuItem value={10}>Newest</MenuItem>
          <MenuItem value={20}>Oldest</MenuItem>
        </Select>
      </FormControl>
    </Box>
      
  );
}