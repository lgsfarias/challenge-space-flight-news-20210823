import { Box, useTheme, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

interface INewsCardProps {
  index: number;
}

export default function NewsCard({ index }: INewsCardProps) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', gap: theme.spacing(2), margin: `${theme.spacing(2)} ${theme.spacing(10)}` , height:300}}>
      <CardMedia
        component="img"
        sx={{ width: 400, height: 300 }}
        image="https://source.unsplash.com/random"
        alt="random image"
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: theme.spacing(2)}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(1) }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            SpaceX Launches Falcon 9 Rocket
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,gap: theme.spacing(1) }}>
            <Typography variant="body2" color="text.secondary">
              2 days ago
            </Typography>
            <Button variant="outlined" size="small" color="secondary">
              newsSite
            </Button>
          </Box>
        </Box>
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', flex: '1', margin: `${theme.spacing(2)} 0`}}>
          <Typography variant="body1" color="text.secondary">
            SpaceX launched a Falcon 9 rocket from Cape Canaveral, Florida, on Sunday, carrying a payload of 60 Starlink satellites into orbit.
            SpaceX launched a Falcon 9 rocket from Cape Canaveral, Florida, on Sunday, carrying a payload of 60 Starlink satellites into orbit.
            SpaceX launched a Falcon 9 rocket from Cape Canaveral, Florida, on Sunday, carrying a payload of 60 Starlink satellites into orbit.
          </Typography>
        </Box>
        <CardActions sx={{ padding: 0 }}>
          <Button size="small" variant="contained" color="secondary" sx={{height: "40px", width: "150px", fontSize: "16px"}}>Read More</Button>
        </CardActions>
      </CardContent>
    </Card>        
  );
}