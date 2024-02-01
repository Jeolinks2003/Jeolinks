import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Paper, Grid, List, ListItem} from '@mui/material'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

const researchs = [{name:'Research Computing'},{name:'Geospatial Platform'},{name:'Support & Consultation'}]
  const technologys =[{name:'Mobile Applications Services'},{name:'Web Development Services'},{name:'Enterprise Resource Planning'}]
  const communications = [{name:'Advertising & Marketing Services'},{name:'Corporate Comm. & Media Dev.'},{name:'Corporate Comm. & Media Dev'}]
  const educationals = [{name:'Education Program & Support'},{name:'Education Research & Academy'},{name:'Education Resource & Mgt.'}]
const Home = () => {
 const title = "COMMUNITY"
  const subtitle = "One Community Platform Initiative: "

  const getResearch = researchs.map(research =>
  <ListItem>-{research.name}</ListItem>
    )
    const getTechnologys = technologys.map(technology =>
      <ListItem>-{technology.name}</ListItem>
      )
  const getCommunications = communications.map(communication =>
    <ListItem>-{communication.name}</ListItem>
    )
    const getEducationals = educationals.map(educational =>
      <ListItem>-{educational.name}</ListItem>
      )
      
  return (
    <Box
    sx={{
      width: '100%',
      flex: 1,
      height: "100vh",
      alignItems: "center",
      gap: 2,
      my: 6,
      textAlign: "center",
    }}
  >
  <Carousel/>

  <Paper elevation={0} sx={{margin:'auto', marginBottom:'10px', width:'95%', padding:'5px'}}>
  <Typography variant='h5' color="secondary" sx={{fontWeight: 'bold',
marginTop:'20px'}}>{title}</Typography>
  <Typography variant='body1'>
    {subtitle}
  </Typography>
    <Box color="initial" textAlign={'justify'} p={2} >A proud support of youth-based cause and local not-for-profit Organization. Founded in 2018 by innovative thinkers. “One Community Platform Initiative, (OCPI)”, intends to reverse the research - technology degradation that is occurring now in Africa’s rural areas so that rural and nomadic populations have
    continued access to research and informational resources on which they have depended for so many years.</Box>
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
    <Paper sx={{padding:'10px'}}>
    <Typography variant='h6'>Membership:</Typography>
    <Grid container >
    <Grid xs={3}  component={Link} to="../routes/Home">Join OCPI</Grid>|
    <Grid xs={4}  component={Link} to="../routes/Home">Individual Memebership</Grid>|
    <Grid xs={4}  component={Link} to="../routes/Home">Institutional Membership</Grid>
    </Grid>

    </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
    <Paper sx={{padding:'10px'}}>
    <Typography variant='h6'>Events:</Typography>
    <Grid container >
    <Grid xs={4} component={Link} to="../routes/Home">OCPI Events</Grid>|
    <Grid xs={4} component={Link} to="../routes/Home">Annual Conference</Grid>|
    <Grid xs={3} component={Link} to="../routes/Home">Workshops</Grid>
    </Grid>

    </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
    <Paper sx={{padding:'10px'}}>
    <Typography variant='h6'>The latest:</Typography>
    <Grid container >
    <Grid xs={3} component={Link} to="../routes/Home">Our Blog</Grid>|
    <Grid xs={4} component={Link} to="../routes/Home">All News</Grid>|
    <Grid xs={4} component={Link} to="../routes/Home">Newsletter signup</Grid>
    </Grid>

    </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
    <Paper sx={{padding:'10px'}}>
    <Typography variant='h6'>About Us:</Typography>
    <Grid container >
    <Grid xs={3} component={Link} to="../routes/Home">About OCPI</Grid>|
    <Grid xs={4} component={Link} to="../routes/Home">Volunteer</Grid>|
    <Grid xs={4} component={Link} to="../routes/Home">Become One Community Agent</Grid>
    </Grid>

    </Paper>
    </Grid>
    
    </Grid>
    <Button variant="text" color='inherit' component={Link} to="../routes/community"  sx={{justifyItems: 'center', padding: '10px'}} startIcon={<KeyboardDoubleArrowLeftRoundedIcon/>} endIcon={<KeyboardDoubleArrowRightRoundedIcon/>}>Read More</Button>
    </Paper>


    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'95%', padding:'5px'}}>
        <Typography variant='h6' color="secondary" sx={{fontWeight: 'bold',
        marginTop:'20px'}}>JEOLINKS DIRECTORIATES:</Typography>
        <Typography variant='body1'>Just check out all of the directorates lists below to get a general idea of what we do</Typography>
        <Grid  container>
          <Grid item md={3} xs={12}>
          <Paper>
          <Typography variant='h6'>Research Services:</Typography>
        <span>{getResearch}</span>
          </Paper>
          </Grid>
          <Grid md={3} xs={12}>
          <Paper>
          <Typography variant='h6'>Technology Solutions:</Typography>
          <span>{getTechnologys}</span>
          </Paper>
          </Grid>
          <Grid md={3} xs={12}>
          <Paper>
          <Typography variant='h6'>Communication Services:</Typography>
          <span>{getCommunications}</span>
          </Paper>
          </Grid>
          <Grid md={3} xs={12}>
          <Paper>
          <Typography variant='h6'>Educational Services:</Typography>
          <span>{getEducationals}</span>
          </Paper>
          </Grid>
        </Grid>
    </Paper>
  </Box>
  )
}

export default Home
