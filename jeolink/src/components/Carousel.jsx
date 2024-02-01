import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography } from '@mui/material';

const images = [
  "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/31/11/30/binary-2904980_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/04/03/15/34/world-wide-web-7109279_1280.jpg"
];


function ImageCarousel() {
  return (
    <Box sx={{ maxWidth: '95%', flexGrow: 1, margin: 'auto', mt: 5 }}>
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
              src={image}
              alt={`Slide ${i}`}
             aria-placeholder='work'
            />
            <Box sx={{width:'100%',height:'100%', position:'absolute', top:'0', mixBlendMode:'multiply', opacity:'50%', backgroundColor:'black' }}/>
            <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              top: {xs:'5%', md:'10%'},
              left: {xs:'5%', md:'10%'},
              right: {xs:'5%', md:'10%'},
              color:'silver',

              textShadow: {xs:'0 3px black', md:'0 5px black'},
              fontSize: { xs: "40px", sm: "5xl", md: "100px" },
              fontWeight: 800,
            }}
          >
          Creating proposition that customers love
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              top: {xs:'70%', md:'80%'},
              left: {xs:'5%', md:'30%'},
              right: {xs:'5%', md:'30%'},
              color:'silver',

              textShadow: {xs:'0 3px black', md:'0 2px 10px black'},
              fontSize: { xs: "20px",  md: "40px" },
            
              
              maxWidth: "54ch",
            }}
          >
          Brief about the Organization should be here
          </Typography>
           
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;