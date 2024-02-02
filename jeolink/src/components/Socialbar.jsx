import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import NotificationsIcon from '@mui/icons-material/Notifications';



export default function Socialbar() {

  return (

    <nav  sx={{paddin:'0'}}>
    <Toolbar elevation={1}  sx={{paddin:'0',justifyContent: 'space-between',}}>
      


        <IconButton size="small" color="secondary">
          <GitHubIcon />
          </IconButton>
        <IconButton size="small" color="secondary">
          <XIcon />
          </IconButton>
        <IconButton size="small" color="secondary">
          <FacebookIcon />
          </IconButton>



    </Toolbar>
  </nav>

  );
}