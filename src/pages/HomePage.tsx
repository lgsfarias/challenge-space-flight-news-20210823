import { AppBar,Box, Toolbar, Typography } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ToggleThemeSwitch from "../components/SwitchTheme";
import SearchInput from "../components/SearchInput";


export default function HomePage() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} width="100vw">
        <AppBar position="static">
          <Toolbar>
            <ToggleThemeSwitch/>
            <SearchInput/>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: 200, height: 200 , border: '1px solid', borderColor: 'text.primary', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 10 }}>
          <RocketLaunchIcon 
            sx={{ fontSize: 100, color: 'text.primary'}}
          />
        </Box>
        <Typography variant="h3" component="h1" sx={{ mt: 5 }} color='text.primary'>
          Space Flight News
        </Typography>
      </Box>
    </>
  );
}