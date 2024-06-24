import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToggleBtn from './components/Button/toggleBtn.jsx'

// import  InfoProvider from './Context/InfoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
  
    <div className="fixed bottom-8 right-8 md:right-16 z-50">
    <ToggleBtn />
  </div>
  <App />
  </>
  // </React.StrictMode>
);
