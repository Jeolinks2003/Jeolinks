import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography } from '@mui/material';

// const images = [
//   "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
//   "https://cdn.pixabay.com/photo/2017/10/31/11/30/binary-2904980_1280.jpg",
//   "https://cdn.pixabay.com/photo/2022/04/03/15/34/world-wide-web-7109279_1280.jpg"
// ];

const images = [
  {
    img:"https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
    text:"Empowering Tomorrow through Web Today",
    desc:"Empowers today for a brighter tomorrow, shaping futures through web development"
  },
  {
    img:"https://cdn.pixabay.com/photo/2017/10/31/11/30/binary-2904980_1280.jpg",
    text:"Code for Change, Linking Hearts",
    desc:"Codes for change, linking hearts and fostering a web of compassion"
  },
  {
    img:  "https://cdn.pixabay.com/photo/2022/04/03/15/34/world-wide-web-7109279_1280.jpg",
    text:"Coding Compassion, Connecting Communities",
    desc:"Codes with compassion, connecting communities through the power of the web"
  }
]

function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1, margin: 'auto', mt: 5 }}>
      <Carousel>
        {images.map((image, i) => (
          <Paper key={i} elevation={4}>
            <Box
              component="img"
              sx={{
                borderRadius:'5px',
                width: '100%',
                height: {xs: '50vh', sm: '60vh', md:'80vh'},
                objectFit: 'cover',
                
              }}
              src={image.img}
              alt={`Slide ${i}`}
             aria-placeholder='work'
            />
            <Box sx={{width:'100%',height:'100%', position:'absolute', top:'0', opacity:'80%', backgroundColor:'black' }}/>
            <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              top: {xs:'5%', md:'10%'},
              left: {xs:'5%', md:'5%'},
              right: {xs:'5%', md:'5%'},
              color:'white',
              textShadow: {xs:'0 3px black', md:'0 5px black'},
              fontSize: { xs: "30px", sm: "5xl", md: "80px" },
              fontWeight: 800,
            }}
          >
          {image.text}
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              top: {xs:'70%', md:'70%'},
              left: {xs:'5%', md:'10%'},
              right: {xs:'5%', md:'10%'},
              color:'white',

              textShadow: {xs:'0 3px black', md:'0 2px black'},
              fontSize: { xs: "15px",  md: "35px" },
            
              
              maxWidth: "54ch",
            }}
          >
          {image.desc}
          </Typography>
           
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;