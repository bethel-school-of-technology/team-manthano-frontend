import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import Navigation from './components/Navigation';
import SignUp from './pages/SignUp';
import NewVehicle from './pages/NewVehicle';
import Login from './pages/Login';
import globalStyles from './assets/css/global.css'
import UserAccount from './pages/UserAccount';

function App() {
  return (
    <UserProvider>
      <VehicleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path="/vehicles/new" element={<NewVehicle />} />
              <Route path="/account" element={<UserAccount />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;
