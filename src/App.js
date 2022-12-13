import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';


function App() {
  return (
    <UserProvider>
      <VehicleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
            <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;
