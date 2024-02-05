import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonGroup, ClickAwayListener, Fade, Grow, MenuList, Paper, Popper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ButtonAppBar() {
  const [openKey, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const handleToggleTwo = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleCloseTwo = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openKey);
  React.useEffect(() => {
    if (prevOpen.current === true && openKey === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openKey;
  }, [openKey]);


  return (
    <Box zIndex={20} sx={{ paddingY: '0',
      display:{xs: 'none', md:'flex'},
      position:'sticky', top: '0'
    }}>
      <AppBar  elevation={1} sx={{paddingY: '0',}} position="static">
        <Toolbar sx={{
        justifyContent: 'space-between',  paddingY: '0', backgroundColor:'white'
        }} >
        <Typography
        variant="h6"
        noWrap
        component="div"
      >
       JEOLINKS
      </Typography>

        <div>
        <ButtonGroup variant="text"  disableElevation>
        <Button color="inherit" component={Link} to="../routes/Home">HOME</Button>
        <Button color="inherit" component={Link} to="../routes/About">ABOUT US</Button>
        <Button color="inherit" id="first-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        OUR DIRECTORATES <ExpandMoreIcon/> </Button>

        <Menu
        
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'first-button',
        }}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} component={Link} to="../routes/Directoriates">Research Services</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="../routes/Directoriates">Technology Solutions</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="../routes/Directoriates">Communication Services</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="../routes/Directoriates">Educational Services</MenuItem>
      </Menu>
        <Button color="inherit"  component={Link} to="../routes/Work">WORK</Button>
        <Button color="inherit"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggleTwo}
      >
      COMMUNITY <ExpandMoreIcon/> 
      </Button>
      <Popper
      open={openKey}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseTwo}>
              <MenuList
                autoFocusItem={openKey}
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem onClick={handleCloseTwo} component={Link} to="../routes/Community">O C P I</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
      
        <Button color="inherit"  component={Link} to="../routes/Contact">CONTACT US</Button>

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