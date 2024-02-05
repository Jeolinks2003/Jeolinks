import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Divider, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard() {
  return (

    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'100%', padding:'5px'}}>
    <Typography variant="h6" color="secondary">THE TEAM:</Typography>
    <Typography variant="body1" color="inherit">On purpose, on strategy, on massage, on target – if we focus on your success, we’ll succeed too</Typography>
    <Divider/>
<Box display={'flex'}>

<Grid container spacing={2}>
    <Grid item xs={12} md={4} >
    <Card sx={{ Width: 345, margin:'10px', marginTop:'20px' }}>
    <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=AIvEivO7BjTwE-QVOfVeS0BypDzFpq4Xt_KVxk8L0yg="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GD (Team)
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
          They often have the designation of "senior" because of their authority in decision-making,
          </Typography>
          </CardContent>
          </CardActionArea>
      <CardActions>
      <Button size="small" color="secondary" component={Link} to="../routes/About">
        TEAM INFORMATION
      </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345, margin:'10px', marginTop:'20px' }}>
    <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=AIvEivO7BjTwE-QVOfVeS0BypDzFpq4Xt_KVxk8L0yg="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GD (Team)
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
        projcets and supervise intermidiate and junior designers in creating concepts, comps, layouts, and final art
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="secondary" component={Link} to="../routes/About">
        TEAM INFORMATION
      </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345, margin:'10px', marginTop:'20px' }}>
    <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=AIvEivO7BjTwE-QVOfVeS0BypDzFpq4Xt_KVxk8L0yg="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GD (Team)
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
          Graphic Design Team is responsible for conceptualization and implementaion of design of solutions to meet production strategies from concept to completion.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="secondary" component={Link} to="../routes/About">
        TEAM INFORMATION
      </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345, margin:'10px', marginTop:'20px' }}>
        <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=AIvEivO7BjTwE-QVOfVeS0BypDzFpq4Xt_KVxk8L0yg="
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                GD (Team)
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign={'justify'}>
              Graphic Design Team is responsible for conceptualization and implementaion of design of solutions to meet production strategies from concept to completion.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="secondary" component={Link} to="../routes/About">
            TEAM INFORMATION
          </Button>
          </CardActions>
        </Card>
    </Grid>


</Grid>

 



      </Box>
      </Paper>
      );
}