import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useThemeContext from '../hooks/useThemeContext';
import { Typography,IconButton } from '@mui/material';

export default function ToggleThemeSwitch() {
  const { toggleTheme , themeName} = useThemeContext();
  return (
    <>
      <IconButton
        sx={{ ml: 1}}
        onClick={toggleTheme}
        color="inherit"
      >
        {themeName === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      <Typography variant="body1" component="div" sx={{ flexGrow: 1}} >
        {themeName === 'dark' ? 'Dark' : 'Light'}
      </Typography>
    </>
  );
}
