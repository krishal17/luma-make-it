import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // We will create this file for Tailwind CSS imports

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
