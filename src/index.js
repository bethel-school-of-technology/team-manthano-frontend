import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Make_Model_Provider from './context/Make_Model_Provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Make_Model_Provider>
      <App />
    </Make_Model_Provider>
  </React.StrictMode>
);
