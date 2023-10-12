import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material"

const LogoCard = ({ company }) => {

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={company.logo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {company.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {company.domain}
        </Button>
      </CardActions>
    </Card>


  )
}

export default LogoCard