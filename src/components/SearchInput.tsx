import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useRef } from 'react';


interface ISearchInputProps {
  search: string;
  setSearch: (search: string) => void;
}

export default function SearchInput({ setSearch }: ISearchInputProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(searchRef.current?.value || '');
      }}
    >
      <TextField
        inputRef={searchRef}
        placeholder='Search…'
        InputProps={{
          sx: { height: 40 , backgroundColor: 'transparent', color: 'text.primary', border: '1px solid', borderColor: 'text.primary' },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type='submit' sx={{ color: 'text.primary' , mr: -2 }}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        />
    </form>
  );
}
