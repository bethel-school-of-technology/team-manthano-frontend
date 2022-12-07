import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'; TO BE ADDED
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import LoggedOutNavbar from './components/LoggedOutNavbar';

function App() {
  return (
    <UserProvider>
      <VehicleProvider>
       <LoggedOutNavbar />
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;
