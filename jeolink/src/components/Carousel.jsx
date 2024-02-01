import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography } from '@mui/material';

const images = [
  "https://cdn.pixabay.com/photo/2023/10/02/14/51/flowers-8289321_640.png",
  "https://cdn.pixabay.com/photo/2023/09/10/15/15/flowers-8245210_640.png",
  "https://cdn.pixabay.com/photo/2023/09/04/17/04/saturn-8233220_640.png"
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
                width: '100%',
                height: {xs: '50vh', sm: '60vh', md:'80vh'},
                objectFit: 'cover'
              }}
              src={image}
              alt={`Slide ${i}`}
             aria-placeholder='work'
            />
            <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              right: '10%',
              mixBlendMode: 'overlay',
              textShadow: '0 5px solid black',
              fontSize: { xs: "70px", sm: "5xl", md: "100px" },
              fontWeight: 800,
            }}
          >
          Creating proposition that customers love
          </Typography>
          <Typography
            sx={{
              fontSize: "lg",
              color: "gray.500",
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