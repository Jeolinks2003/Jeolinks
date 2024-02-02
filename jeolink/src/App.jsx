import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TemporaryDrawer from "./components/Drawer.jsx";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Socialbar from "./components/Socialbar.jsx";

const theme = createTheme({
  palette:{
    primary:{
      main: '#E9F1FA'
    },
    secondary:{
      main: '#00ABE4'
    }
  }
})
function App() {
  return (

    <ThemeProvider theme={theme}>
    <Socialbar/>
    <Navbar/>
    <TemporaryDrawer/>
    
    <Outlet />

    </ThemeProvider>

  )
}

export default App
