import React from 'react'
import ReactDOM from 'react-dom/client'
import Errorpage from "./routes/Errorpage";
import Contact from "./routes/Contact";
import About from "./routes/About";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './App.css'
import App from './App';
import Home from './routes/Home';

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
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
