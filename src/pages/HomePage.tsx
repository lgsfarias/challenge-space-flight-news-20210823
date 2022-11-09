import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { AppBar,Box, Container, Divider, Toolbar, Typography} from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ToggleThemeSwitch from "../components/SwitchTheme";
import SearchInput from "../components/SearchInput";
import SortFilter from "../components/SortFilter";
import NewsCard, { NewsCardSkeleton } from "../components/NewsCard";
import { Article } from "../interfaces";
import api from "../services/api";


export default function HomePage() {
  const [news, setNews] = useState<Article[] | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const [search, setSearch] = useState<string>('');

  async function loadNews() {
    try{
      // 5 seconds delay to simulate a slow connection
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const offset = news?.length || 0;
      const response = await api.get(`/articles`, {
        params: {
          _start: offset,
          _sort: sortBy === 'oldest' ? 'id' : 'id:desc',
          _summary_contains: search,
          _title_contains: search
        },
      });
      const newNews = response.data;
      if (newNews.length === 0) {
        setHasMore(false);
      }
      setNews((prevNews) => [...(prevNews || []), ...newNews]);
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    (async () => {
      try{
        const response = await api.get(`/articles`, {
          params: {
            _start: 0,
            _sort: sortBy === 'oldest' ? 'id' : 'id:desc',
            _summary_contains: search,
            _title_contains: search
          },
        });
        setNews(response.data);
      }catch(err){
        console.log(err)
      }
    })();
  }, [sortBy, search]);


  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} width="100%">
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'transparent', color: 'text.primary' }}>
          <Toolbar>
            <ToggleThemeSwitch/>
            <SearchInput search={search} setSearch={setSearch}/>
            <SortFilter sortBy={sortBy} setSortBy={setSortBy}/>
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
          {news === null 
          ? (
            new Array(10).fill(0).map((_, index) => (
              <NewsCardSkeleton index={index} key={index} />
            ))
          ) 
          : news.length === 0  
            ? (
              <Typography variant="h6" component="h2" sx={{ mt: 3 }} color='text.primary' display='flex' justifyContent='center'>
                No news found
              </Typography>
            ) 
            : (
              <InfiniteScroll
                pageStart={0}
                loadMore={loadNews}
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
              >
              {news.map((article,index) => (
                <NewsCard index={index} article={article} key={article.id} />
              ))}
              </InfiniteScroll>
            )}
        </Container>
      </Box>
    </>
  );
}