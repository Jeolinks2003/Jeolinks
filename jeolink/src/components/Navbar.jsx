import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonGroup } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} disableElevation>
      <AppBar position="static">
        <Toolbar sx={{
        justifyContent: 'space-between'
        }} >
        <Button color="inherit">JEOLINKS</Button>

        <div>
        <ButtonGroup variant="text"  disableElevation sx={{
          display:{xs: 'none', sm:'flex'}
        }}>
        <Button color="inherit">HOME</Button>
        <Button color="inherit">ABOUT US</Button>
        <Button color="inherit">OUR DIRECTORATES</Button>
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