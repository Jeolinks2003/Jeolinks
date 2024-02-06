import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Typography  variant="h5" color="initial" p={2}>JEOLINKS</Typography>
      }
    >
      <ListItemButton elevation={1} component={Link} to="/">
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton elevation={1} component={Link} to="/About">
        <ListItemIcon>
          <InfoRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
      <Accordion elevation={1} sx={{ paddingRight:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <ListItemButton  sx={{ paddingY: 0}}>
        <ListItemIcon>
          <PeopleRoundedIcon  sx={{ paddingLeft:1}}/>
        </ListItemIcon>
        <ListItemText primary="Our Directoriates" />
        
      </ListItemButton>
        </AccordionSummary>
        <AccordionDetails>
        <List disablePadding>
          <ListItemButton component={Link} to="/Directoriates">
            <ListItemText primary="Research Services" />
            </ListItemButton>
        <ListItemButton component={Link} to="/Directoriates">
            <ListItemText primary="Technology Solutions" />
            </ListItemButton>
            <ListItemButton component={Link} to="/Directoriates">
            <ListItemText primary="Communication Services" />
            </ListItemButton>
            <ListItemButton component={Link} to="/Directoriates">
            <ListItemText primary="Educational Services" />
            </ListItemButton>
        </List>
        </AccordionDetails>
      </Accordion>
      <ListItemButton elevation={1} component={Link} to="/Work">
      <ListItemIcon>
        <WorkspacesRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Work" />
    </ListItemButton>
    <Accordion elevation={1} sx={{ paddingRight:2}}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon/>}
      aria-controls="panel1-content"
      id="panel1-header"
    >
    <ListItemButton  sx={{ paddingY: 0}}>
    <ListItemIcon>
      <PeopleRoundedIcon  sx={{ paddingLeft:1}}/>
    </ListItemIcon>
    <ListItemText primary="Community" />
    
  </ListItemButton>
    </AccordionSummary>
    <AccordionDetails>
    <List disablePadding>
      <ListItemButton component={Link} to="/Community">
        <ListItemText primary="O C P I" />
        </ListItemButton>
    </List>
    </AccordionDetails>
  </Accordion>
      <ListItemButton elevation={1} component={Link} to="/Contact">
      <ListItemIcon>
        <CallRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItemButton>
    </List>
  );
}