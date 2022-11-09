import { AppBar,Box, Card, Container, Divider, Toolbar, Typography, CardMedia, CardContent, CardActions, Button, useTheme } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ToggleThemeSwitch from "../components/SwitchTheme";
import SearchInput from "../components/SearchInput";
import SortFilter from "../components/SortFilter";
import NewsCard from "../components/NewsCard";


export default function HomePage() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} width="100%">
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'transparent', color: 'text.primary' }}>
          <Toolbar>
            <ToggleThemeSwitch/>
            <SearchInput/>
            <SortFilter/>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: 100, height: 100 , border: '1px solid', borderColor: 'text.primary', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
          <RocketLaunchIcon 
            sx={{ fontSize: 50, color: 'text.primary'}}
          />
        </Box>
        <Typography variant="h4" component="h1" sx={{ mt: 3 }} color='text.primary'>
          Space Flight News
        </Typography>
        <Divider sx={{ width: '100%', mt: 5 }}/>
        <Container sx={{ mt: 5 }}>
          {new Array(10).fill(0).map((_, index) => (
            <NewsCard index={index} key={index}/>
          ))}
        </Container>
      </Box>
    </>
  );
}