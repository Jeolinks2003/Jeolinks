import React from 'react'
import ReactDOM from 'react-dom/client'
import Errorpage from "./routes/Errorpage";
import Contact from "./routes/Contact";
import About from "./routes/About";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import App from './App';
import Home from './routes/Home';
import Directoriates from './routes/Directoriates';
import Community from './routes/Community';
import Work from './routes/Work';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/routes/Contact",
        element: <Contact />,
      },
      {
        path: "/routes/About",
        element: <About />,
      },
      {
        path: "/routes/Home",
        element: <Home />,
      },
      {
        path: "/routes/Directoriates",
        element: <Directoriates />,
      },
      {
        path: "/routes/Community",
        element: <Community />,
      },
      {
        path: "/routes/Work",
        element: <Work />,
      },
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
