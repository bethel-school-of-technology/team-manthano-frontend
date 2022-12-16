import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from './pages/SignIn';
import NewVehicle from './pages/NewVehicle';


function App() {
  return (
    <UserProvider>
      <VehicleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/vehicles/new" element={<NewVehicle />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;
