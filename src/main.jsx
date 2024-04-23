import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="bg-[#161513] h-screen text-white">

    <div className="container px-4 mx-auto">

      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  </div>
)
