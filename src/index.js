import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
// Custom Css Files
import './index.css';
import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import "./assets/css/responsive.css";
import "./assets/css/scrollbar.css";

// Custom Js Files
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
