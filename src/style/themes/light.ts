import { createTheme } from '@mui/system';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
      primary: '#1e2022',
      secondary: '#6b7280',
      disabled: '#a0aec0',
    },
    background: {
      default: '#f7f6f3',
      paper: '#fff',
    },
  },
});
