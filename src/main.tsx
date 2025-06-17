
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/rtl.css'

// Function to get the stored language and set the direction
const setDocumentDirection = () => {
  const language = localStorage.getItem('language') || 'english';
  document.documentElement.dir = language === 'arabic' ? 'rtl' : 'ltr';
};

// Initial direction setting
setDocumentDirection();

// Listen for storage changes to update direction
window.addEventListener('storage', setDocumentDirection);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
