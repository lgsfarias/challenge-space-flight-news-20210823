import { Box, useTheme, Card, CardActions, CardContent, CardMedia, Button, Typography, Skeleton} from '@mui/material';
import { Article } from '../interfaces';
import rocketPng from '../assets/rocket.png';

interface INewsCardProps {
  article: Article;
  index: number;
};

export default function NewsCard({ index , article}: INewsCardProps) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', gap: theme.spacing(2), margin: `${theme.spacing(2)} ${theme.spacing(10)}` , height:300, borderRadius: 2, boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)' }}>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 300 }}
        image={article.imageUrl}
        alt={article.title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = rocketPng;
        }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: theme.spacing(2)}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: `${theme.spacing(1)}` }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {article.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,gap: `${theme.spacing(1)}` }}>
            <Typography variant="body2" color="text.secondary">
              {new Date(article.updatedAt).toLocaleDateString()}
            </Typography>
            <Button variant="outlined" size="small" color="secondary" href={article.url} target="_blank">
              {article.newsSite}
            </Button>
          </Box>
        </Box>
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', flex: '1', margin: `${theme.spacing(2)} 0`}}>
          <Typography variant="body1" color="text.secondary">
            {article.summary}
          </Typography>
        </Box>
        <CardActions sx={{ padding: 0 }}>
          <Button size="small" variant="contained" color="secondary" sx={{height: "40px", width: "150px", fontSize: "16px"}}>Read More</Button>
        </CardActions>
      </CardContent>
    </Card>        
  );
}

interface INewsCardSkeletonProps {
  index: number;
}

export function NewsCardSkeleton({ index }: INewsCardSkeletonProps) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', gap: theme.spacing(2), margin: `${theme.spacing(2)} ${theme.spacing(10)}` , height:300}}>
      <Skeleton variant="rectangular" sx={{ width: 300, height: 300 }} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: theme.spacing(2), flex: 1}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: `${theme.spacing(1)}` }}>
          <Skeleton variant="text" width="100%" />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,gap: `${theme.spacing(1)}` }}>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="50%" />
          </Box>
        </Box>
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', flex: '1', margin: `${theme.spacing(2)} 0`}}>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
        </Box>
        <CardActions sx={{ padding: 0 }}>
          <Skeleton variant="rectangular" sx={{height: "40px", width: "150px", fontSize: "16px"}} />
        </CardActions>
      </CardContent>
    </Card>
  );
}