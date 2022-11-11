import {Box, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material';

interface SortFilterProps {
  sortBy: 'newest' | 'oldest';
  setSortBy: (sortBy: 'newest' | 'oldest') => void;
}

export default function SortFilter({ sortBy, setSortBy }: SortFilterProps) {

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setSortBy(event.target.value as 'newest' | 'oldest');
  };

  return (
    <Box sx={{ minWidth: 120, backgroundColor: 'transparent', color: 'text.primary', ml: 2}}>
      <FormControl fullWidth >
        <Select
          className='sort-filter'
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
          <MenuItem value='newest'>Newest</MenuItem>
          <MenuItem value='oldest'>Oldest</MenuItem>
        </Select>
      </FormControl>
    </Box>
      
  );
}