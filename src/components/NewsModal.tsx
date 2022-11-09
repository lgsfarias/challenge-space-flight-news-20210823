import { Button, Box , Typography, Modal, Card} from '@mui/material';
import { Article } from '../interfaces';
import {  useTheme,  CardActions, CardContent, CardMedia, Skeleton} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  justifyContent: 'space-between',
  width: '80%',
};

interface NewsModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  article: Article | null;
}

export default function NewsModal({open, setOpen, article}: NewsModalProps) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: '300px', height: '300px' }}
            image={article?.imageUrl || ''}
            alt={article?.title || ''}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                {article?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(article?.updatedAt || '').toLocaleDateString()}
              </Typography>
            </Box>
            <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', flex: '1', margin: '16px 0' }}>
              <Typography variant="body1" color="text.secondary">
                {article?.summary}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <Button
            variant="contained" 
            color="secondary" 
            sx={{ marginTop: '16px' }}
            href={article?.url || ''}
            target="_blank"
          >
            {article?.newsSite}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginTop: '16px' }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}