import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#302E53',
      dark: '#1D1C3B',
      light: '#6963D4',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D07017',
      dark: '#B35E0A',
      light: '#F7A91B',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#6b7280',
      disabled: '#a0aec0',
    },
    background: {
      default: '#1e2022',
      paper: '#1e2022',
    },
  },
});
