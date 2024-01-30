import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import TemporaryDrawer from "./components/Drawer.jsx";


function App() {
  return (

    <>
    <Navbar/>
    <TemporaryDrawer/>
    <Outlet />
    </>

  )
}

export default App
