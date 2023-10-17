import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LogoCard = ({ company }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' height='180' image={company.logo} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {company.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {company.domain}
            </Typography>
            <Stack spacing={2} direction='column' sx={{ mt: 1 }}>
              <CopyToClipboard text={company.logo}>
                <Button variant='contained'>Copy image address</Button>
              </CopyToClipboard>
              <a
                href={`http://www.${company.domain}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outlined'>Visit website</Button>
              </a>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default LogoCard;
