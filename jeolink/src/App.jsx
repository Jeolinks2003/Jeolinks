import { ThemeProvider, createTheme} from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import About from "./routes/About";
// import Errorpage from "./routes/Errorpage";
import Contact from "./routes/Contact";
import Home from "./routes/Home"
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
// import { AnimatePresence } from "framer-motion";

 const customTheme = createTheme({
  palette:{
    primary:{
      main:'#E9F1FA'
    },
    secondary:{
      main:'#00ABE4'
    }
  }
 })
function App() {

  return(
<ThemeProvider theme={customTheme}>
<BrowserRouter>
    <Drawer/>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>} />
      
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
</BrowserRouter>
</ThemeProvider>
  );
}
export default App;