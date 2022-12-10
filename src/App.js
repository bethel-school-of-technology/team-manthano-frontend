import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; TO BE ADDED
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import './public/stylesheets/App.css';
import LoggedOutNavbar from './components/LoggedOutNavbar';
import LoggedInNavbar from './components/LoggedInNavbar';

function App() {
  return (
    <UserProvider>
      <VehicleProvider>
       <LoggedOutNavbar />
       <LoggedInNavbar />
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;
