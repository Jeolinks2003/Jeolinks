import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Carousel from '../components/Carousel';

const Home = () => {
 const title = "Creating proposition that customers love"
  const subtitle = "Brief about the Organization should be here "
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
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "70px", sm: "5xl", md: "6xl" },
        fontWeight: 800,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: "lg",
        color: "gray.500",
        maxWidth: "54ch",
      }}
    >
      {subtitle}
    </Typography>
    <div>
    <Typography variant='h5' color="secondary" sx={{fontWeight: 'bold'}}>COMMUNITY</Typography>
    <Typography variant="body2" color="initial" textAlign={'justify'} p={2}>A proud support of youth-based cause and local not-for-profit Organization. Founded in 2018 by innovative thinkers. “One Community Platform Initiative,
    (OCPI)”, intends to reverse the research - technology degradation that is occurring now in Africa’s rural areas so that rural and nomadic populations have
    continued access to research and informational resources on which they have depended for so many years.</Typography>
    <Button variant="contained" disableElevation  sx={{justifyItems: 'center', padding: '4'}} startIcon={<KeyboardDoubleArrowLeftRoundedIcon/>} endIcon={<KeyboardDoubleArrowRightRoundedIcon/>}>Explore</Button>
    </div>
  </Box>
  )
}

export default Home
