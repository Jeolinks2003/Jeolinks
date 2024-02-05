import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, Router, RouterProvider, Routes,} from "react-router-dom";
import './App.css'
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route path='/*' element={<App/>}/>
    </Routes>
    </Router>
  </React.StrictMode>
)
