import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);