import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, Paper, Grid, List, ListItem, Divider, Container, Card, FormGroup, FormControl, FormLabel, FormHelperText, TextField, makeStyles, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Carousel from '../components/Carousel';
import { Form, Link } from 'react-router-dom';
import ActionAreaCard from '../components/Card';
import KeyboardDoubleArrowRightRounded from '@mui/icons-material/KeyboardDoubleArrowRightRounded';


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
  <Container>
  
  <Carousel/>

  <Paper bgcolor={"black"} elevation={0} sx={{margin:'auto', marginBottom:'10px', borderRadius:'10px'}}>
  <Typography variant='h5' bgcolor={"deepskyblue"} color="white" sx={{fontWeight: 'bold',
padding:'20px', borderRadius:'10px'}}>{title}</Typography>
  <Typography variant='body1'>
    {subtitle}
  </Typography>
    <Box color="initial"  bgcolor={"none"} textAlign={'justify'} p={2} >A proud support of youth-based cause and local not-for-profit Organization. Founded in 2018 by innovative thinkers. “One Community Platform Initiative, (OCPI)”, intends to reverse the research - technology degradation that is occurring now in Africa’s rural areas so that rural and nomadic populations have
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


    <Paper elevation={0} sx={{ marginBottom:'20px', width:'100%', borderRadius:'10px', backgroundColor:'deepskyblue', display:{ xs:'none',sm:'none', md:'grid'}}}>
        <Typography variant='h6' color="white" bgcolor={"deepskyblue"} sx={{fontWeight: 'bold',
        marginTop:'20px', borderRadius:'10px'}}>JEOLINKS DIRECTORIATES:</Typography>
        <Typography variant='body1' color="white" bgcolor={"deepskyblue"} sx={{marginBottom:'20px', marginTop:'20px'}}>Just check out all of the directorates lists below to get a general idea of what we do</Typography>
        <Grid  container bgcolor={'black'}>
        <Grid item xs={8}>
        <Grid item xs={12}
        component={'img'} 
        src={"https://cdn.pixabay.com/photo/2023/05/13/04/02/natural-hair-7989687_1280.jpg"} sx={{height:'60vh',
        objectFit: 'cover',}}/>
        
        </Grid>
        
        <Grid item xs={4} bgcolor={'black'} sx={{paddingLeft:'20px', paddingRight:'20px'}}>
          <Grid item xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6' color={"white"} bgcolor={"black"} p={1}>Research Services:</Typography>
        <span>{getResearch}</span>
          </Paper>
          </Grid>
          <Grid xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6' color={"white"} bgcolor={"black"} p={1}>Technology Solutions:</Typography>
          <span>{getTechnologys}</span>
          </Paper>
          </Grid>
          <Grid xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6' color={"white"} bgcolor={"black"} p={1}>Communication Services:</Typography>
          <span>{getCommunications}</span>
          </Paper>
          </Grid>
          <Grid xs={12} sx={{marginBottom:'20px'}}>
          <Paper>
          <Typography variant='h6' color={"white"} bgcolor={"black"} p={1}>Educational Services:</Typography>
          <span>{getEducationals}</span>
          </Paper>
          </Grid>
        </Grid>
        
        </Grid>
    </Paper>


    <Paper elevation={0} sx={{ marginBottom:'20px', width:'100%', borderRadius:'10px', display:{sm:'grid', md:'none'}}}>
    <Typography variant='h6' color="inherit"sx={{fontWeight: 'bold',
    marginTop:'20px', borderRadius:'10px'}}>JEOLINKS DIRECTORIATES:</Typography>
    <Typography variant='body1' color="inherit" sx={{marginBottom:'20px', marginTop:'20px'}}>Just check out all of the directorates lists below to get a general idea of what we do</Typography>
    <Grid  container >
 
      <Grid item xs={12} md={5} sx={{margin:'20px'}}>
      <Paper>
      <Typography variant='h6' color={"inherit"} p={1}>Research Services:</Typography>
    <span>{getResearch}</span>
      </Paper>
      </Grid>

      <Grid xs={12} md={5} sx={{margin:'20px'}}>
      <Paper>
      <Typography variant='h6' color={"inherit"} p={1}>Technology Solutions:</Typography>
      <span>{getTechnologys}</span>
      </Paper>
      </Grid>

      <Grid xs={12} md={5} sx={{margin:'20px'}}>
      <Paper>
      <Typography variant='h6' color={"inherit"} p={1}>Communication Services:</Typography>
      <span>{getCommunications}</span>
      </Paper>
      </Grid>

      <Grid xs={12} md={5} sx={{margin:'20px'}}>
      <Paper>
      <Typography variant='h6' color={"inherit"} p={1}>Educational Services:</Typography>
      <span>{getEducationals}</span>
      </Paper>
      </Grid>
    </Grid>
    

</Paper>

    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'100%', padding:'5px'}}>
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

    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'100%', padding:'5px'}}>
    <Typography variant="h6" color="secondary">WORKS:</Typography>
    <Divider/>
    <Typography marginTop={'20px'} variant="body1" color="initial">We believe our work speaks for itself. - Ready to JOIN? - Get in touch</Typography>
    <Typography variant="h6" color="initial">(34) Customers – (22) Projects – (0.1) Issues Resolved in Millions – (0.2) Innovative Ideas in Millions</Typography>
    </Paper>

 
    <ActionAreaCard/>
  

    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'100%', padding:'5px'}}>
    <Typography variant="h6" color="secondary">PARTNERS:logos here</Typography>
    <Divider/>
    </Paper>
    

    
    <Paper elevation={0} sx={{margin:'auto', marginBottom:'20px', width:'100%', padding:'5px'}}>
    <Typography variant="h6" color="secondary">FREE CONSULTATION:</Typography>
    <Divider/>
    <Typography marginTop={'20px'} variant="body1" color="initial">If you have any questions, would like to know more about our services, or like a quote for some work, then feel free to contact us. We’ll
    endeavor to get back to you as soon as possible</Typography>
    
    <Grid container sx={{marginTop:'40px'}}>
      <Grid item md={6} xs={12} p={6}sx={{padding:{xs:'2px', md:'10px'},
      width:'100%',
    display:'block'}} >
        <Form noValidate autoComplete='off'>
          <Typography variant='h6'>FEEDBACK FORM</Typography>
          <TextField  required label="Name" defaultValue="Please enter your full name"
          size="small" variant='standard' type='text' color='primary'sx={{ width:'100%',}}/>
          <TextField required label="Email" defaultValue="Please enter your email address"
          size="small" variant='standard' type='text' color='primary'sx={{ width:'100%',}}/>
          <TextField required label="Phone" defaultValue="Please enter a phone number where you can be reached"
          size="small" variant='standard' type='number' color='primary'sx={{ width:'100%',}}/>
          <FormLabel >Contact method preference</FormLabel>
          <RadioGroup required
          row
          aria-labelledby="group-label"
          name="buttons-group"
          >
          <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
          <FormControlLabel value="Email" control={<Radio />} label="Email" />
          <FormControlLabel value="Do not contact" control={<Radio />} label="Do not contact" />
          </RadioGroup>
          <FormLabel >How can we help?</FormLabel>
          <Divider/>
          <FormLabel>TIP: Use the handle in the bottom-center or bottom-right corner to
          expand the text field.</FormLabel>
          <Button onClick={() => console.log('you Submitted')} variant='outlined' color='secondary' type='submit'endIcon={<KeyboardDoubleArrowRightRounded />} sx={{display:'flex', marginTop:'10px'}} > Submit</Button>
        </Form>
      </Grid>
      <Grid item md={6} xs={12} p={6}sx={{padding:{xs:'2px', md:'10px'},width:'100%',
      display:'block'}}>
      <Card elevation={0}>
      <Typography variant="h6" color="initial">Contact Us</Typography>
      <Typography variant="body1" color="initial" sx={{marginBottom:'40px'}}>Questions or comment? | Please contact us – we’d love to hear from you</Typography>
      <Typography variant="h6" color="initial"sx={{ marginTop:'40px'}}>JEOLINKS Service Desk</Typography>
      <Typography variant="body1" color="initial">+234 - 7087442274, +234 – 80107918336</Typography>
      <Typography variant="body1" color="initial">Email: <Link component={Link} to="info@jeolinks.com">info@jeolinks.com</Link> <Link component={Link} to="Jeolinks2003@gmail.com">Jeolinks2003@gmail.com</Link></Typography>
      <Typography variant="body1" color="initial">Website: <Link variant='text' component={Link} to="www.jeolinks.com">www.jeolinks.com</Link></Typography>
       

      </Card>
      </Grid>
    </Grid>
  
    </Paper>



    </Container>
  </Box>
  )
}

export default Home
