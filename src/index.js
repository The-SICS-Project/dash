import React from "react";
import ReactDOM from 'react-dom/client';
import Login from './App.js';
import Signup from "./signup";
import Userdashboard from "./Userdashboard";
import 'font-awesome/css/font-awesome.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Userdashboard/>);
// process.env.CI = false;
