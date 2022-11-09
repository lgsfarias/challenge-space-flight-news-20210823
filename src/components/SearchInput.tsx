import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function SearchInput() {
  return (
    <TextField
      placeholder='Search…'
      InputProps={{
        sx: { height: 40 , backgroundColor: 'transparent', color: 'text.primary', border: '1px solid', borderColor: 'text.primary' },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}
