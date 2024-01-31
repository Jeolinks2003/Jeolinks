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
    <Box disableElevation  sx={{ flexGrow: 1, display:{xs: 'flex', md:'none'}}}>
    <AppBar position="static">
    <Toolbar sx={{justifyContent: 'space-between'}}>
    <Button color="inherit" component={Link} to="../routes/Home">JEOLINKS</Button>
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





// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// 
// import { ButtonGroup } from '@mui/material';
// 

// export default function ButtonAppBar() {
//   return (
//     <Box disableElevation >
//       <>
//         < >
//         

       
//         </Toolbar>
          
//       </AppBar>
//     </Box>
//   );
// }