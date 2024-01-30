import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box disableElevation  sx={{ flexGrow: 1,
      display:{xs: 'none', sm:'flex'}
    }}>
      <AppBar position="static">
        <Toolbar sx={{
        justifyContent: 'space-between'
        }} >
        <Button color="inherit" component={Link} to="../routes/Home">JEOLINKS</Button>

        <div>
        <ButtonGroup variant="text"  disableElevation>
        <Button color="inherit" component={Link} to="../routes/Home">HOME</Button>
        <Button color="inherit" component={Link} to="../routes/About">ABOUT US</Button>
        <Button color="inherit"  component={Link} to="../routes/Contact">OUR DIRECTORATES</Button>

        </ButtonGroup>
        <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2,
              display:{xs: 'flex', sm:'none'}
            }}
            >
            <MenuIcon />
            </IconButton>
            </div>
        </Toolbar>
          
      </AppBar>
    </Box>
  );
}