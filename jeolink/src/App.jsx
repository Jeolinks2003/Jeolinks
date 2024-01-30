
import { BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";

import About from "./pages/About";
import NoPage from "./pages/ErrorPage.jsx";
import { Button } from "@mui/material";


function App() {
  
  // const navigate = useNavigate();
  // function handleNewPage(){
  //   navigate('/About');
  // }

  return (

    <Routes>
      <Route path="/" element={<Navbar />}/>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>


  )
}

export default App
