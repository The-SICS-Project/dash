import React from "react";
import {Magic} from 'magic-sdk';
import  ReactDOM from 'react-dom/client';
import Login from './App.js'
import "./styles.css";
const m = new Magic('pk_live_AABC93231E65FC6F');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);
