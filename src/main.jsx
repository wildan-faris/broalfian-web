import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="bg-[#161513] text-white ">
    <div>
      <div className="container mx-auto h-screen flex flex-col">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    </div>
  </div>
);
