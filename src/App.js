import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; TO BE ADDED
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import './public/stylesheets/App.css';
import LoggedOutNavbar from './components/LoggedOutNavbar';

function App() {
  return (
    <div className='app'>
      <UserProvider>
        <VehicleProvider>
          <LoggedOutNavbar />
        </VehicleProvider>
      </UserProvider>
    </div>
  );
}

export default App;
