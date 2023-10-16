import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const LogoCard = ({ company }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component='img' height='140' image={company.logo} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {company.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {company.domain}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default LogoCard;
