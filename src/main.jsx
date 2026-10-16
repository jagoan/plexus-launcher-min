import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReactGA from "react-ga4";
import Booklet from './views/pages/LandingPage.jsx';


import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';

ReactGA.initialize("G-QCWJ7H7ZTG");
ReactGA.send({ hitType: "pageview", page: `${window.location.pathname} | Homepage` });
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
