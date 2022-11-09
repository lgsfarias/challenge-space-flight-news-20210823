import { AppBar,Box, Container, Divider, Toolbar, Typography} from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ToggleThemeSwitch from "../components/SwitchTheme";
import SearchInput from "../components/SearchInput";
import SortFilter from "../components/SortFilter";
import NewsCard, { NewsCardSkeleton } from "../components/NewsCard";
import { useEffect, useState } from "react";
import { Article } from "../interfaces";
import api from "../services/api";


export default function HomePage() {
  const [news, setNews] = useState<Article[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/articles", {
        params: {
          _limit: 10,
        },
      });
      setNews(data);
    })();
  }, []);


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
          {news !== null ? (
            news.map((article,index) => (
              <NewsCard index={index} article={article} key={article.id} />
            ))
          ) : (
            new Array(10).fill(0).map((_, index) => (
              <NewsCardSkeleton index={index} key={index} />
            ))
          )}
        </Container>
      </Box>
    </>
  );
}