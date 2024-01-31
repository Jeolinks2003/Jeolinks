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
        <Typography variant="h5" color="initial" p={2} component={Link} to="../routes/Home">JEOLINKS</Typography>
      }
    >
      <ListItemButton component={Link} to="../routes/Home">
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="../routes/About">
        <ListItemIcon>
          <InfoRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ paddingRight:2}}/>}
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
          <ListItemButton component={Link} to="../routes/Directoriates">
            <ListItemText primary="Research Services" />
            </ListItemButton>
        <ListItemButton component={Link} to="../routes/Directoriates">
            <ListItemText primary="Technology Solutions" />
            </ListItemButton>
            <ListItemButton component={Link} to="../routes/Directoriates">
            <ListItemText primary="Communication Services" />
            </ListItemButton>
            <ListItemButton component={Link} to="../routes/Directoriates">
            <ListItemText primary="Educational Services" />
            </ListItemButton>
        </List>
        </AccordionDetails>
      </Accordion>
      <ListItemButton component={Link} to="../routes/Work">
      <ListItemIcon>
        <WorkspacesRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Work" />
    </ListItemButton>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ paddingRight:2}}/>}
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
      <ListItemButton component={Link} to="../routes/Community">
        <ListItemText primary="O C P I" />
        </ListItemButton>
    </List>
    </AccordionDetails>
  </Accordion>
      <ListItemButton component={Link} to="../routes/Contact">
      <ListItemIcon>
        <CallRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItemButton>
    </List>
  );
}