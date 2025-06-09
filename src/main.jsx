// src/main.jsx
import './index.css';              // → first import
// force dark class
if (!document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.add('dark');
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);