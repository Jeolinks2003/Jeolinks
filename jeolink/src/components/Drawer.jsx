import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import NestedList from './lists';

const style = {
  position: 'absolute' ,
  top: '0',
  left: '0',
  width: 200,
  height: '100vh',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 0,
  
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box zIndex={20} sx={{ flexGrow: 1, display:{xs: 'flex', md:'none'},position:'sticky', top: '0'}}>
    <AppBar elevation={1} position="static">
    <Toolbar sx={{justifyContent: 'space-between', backgroundColor:'white'}}>
    <Button color="inherit" component={Link} to="/">JEOLINKS</Button>
    <div>
      <IconButton
   size="large"
   edge="end"
   color="inherit"
   aria-label="menu"
   onClick={handleOpen}
   sx={{ ml: 2,}}
   >
   <MenuIcon />
   </IconButton>
   </div>
    <Modal 
    open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
        <Box sx={style}>
        <NestedList/>
        </Box>
      </Modal>
      </Toolbar>
      </AppBar>
    </Box>
  );
}
