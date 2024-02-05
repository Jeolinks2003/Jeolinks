import { Routes, Route, useLocation } from "module";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home"
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  return(
 <>
 <Navbar/>
<AnimatePresence>
<Routes location={location} key={location.pathname}>
<Route index element={<Home/>} />
<Route path="/About" element={<About/>}/>
<Route path="/Contact" element={<Contact />} />
</Routes>
</AnimatePresence>
 </>
  );
}
export default App;