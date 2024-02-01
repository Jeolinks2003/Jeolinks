import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Paper, Grid, List, ListItem, Divider} from '@mui/material'
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
        <Typography variant='body1' sx={{marginBottom:'10px'}}>Just check out all of the directorates lists below to get a general idea of what we do</Typography>
        <Grid  container spacingY={2}>
          <Grid item md={3} xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6'>Research Services:</Typography>
        <span>{getResearch}</span>
          </Paper>
          </Grid>
          <Grid md={3} xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6'>Technology Solutions:</Typography>
          <span>{getTechnologys}</span>
          </Paper>
          </Grid>
          <Grid md={3} xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6'>Communication Services:</Typography>
          <span>{getCommunications}</span>
          </Paper>
          </Grid>
          <Grid md={3} xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6'>Educational Services:</Typography>
          <span>{getEducationals}</span>
          </Paper>
          </Grid>
        </Grid>
    </Paper>

    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'95%', padding:'5px'}}>
    <Typography variant="h6" color="secondary" sx={{width:'100%', backGroundColor:'background'}}>ABOUT US</Typography>
    <Divider/>
    <Box>
    <Typography variant="body1"  color="initial" marginBottom={'20px'}><span fontweight={'500'}>Who We Are:</span> we originally started in 2018 as a startup firm, JEOLINKS has pave its way into the heights of innovative technology services world, envision to
    develop clients into informed, proactive users of internet services!</Typography>
    <Typography variant="body1"  color="initial" marginBottom={'20px'}><span sx={{fontWeight:'500', fontsize:'20px'}}>What we do:</span> Our highly skilled team keep pace with our community’s emerging needs, we continue to evolve our competencies across four main families of
    practice, including Planning and Design, Service Delivery and Operations, Data Strategy, and Innovative Technology</Typography>
    <Typography variant="body1"  color="initial" marginBottom={'20px'}><span sx={{fontWeight:'500px', fontsize:'20px'}}>Why Us:</span>Your search for your IT/consulting needs is now over- JEOLINKS was your missing element. Our pricing is completely bespoke and is based on your
    objectives.</Typography>
    <Button variant="text" color='inherit' component={Link} to="../routes/About"  sx={{justifyItems: 'center', padding: '10px'}} startIcon={<KeyboardDoubleArrowLeftRoundedIcon/>} endIcon={<KeyboardDoubleArrowRightRoundedIcon/>}>Read More</Button>
    </Box>
    </Paper>
    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'95%', padding:'5px'}}>
    <Typography variant="h6" color="secondary">WORKS:</Typography>
    <Divider/>
    <Typography marginTop={'20px'} variant="body1" color="initial">We believe our work speaks for itself. - Ready to JOIN? - Get in touch</Typography>
    <Typography variant="h6" color="initial">(34) Customers – (22) Projects – (0.1) Issues Resolved in Millions – (0.2) Innovative Ideas in Millions</Typography>
    </Paper>
  </Box>
  )
}

export default Home
