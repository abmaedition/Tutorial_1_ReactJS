import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// importing the bootstrap in index.js to be accessible through out the application:
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
