import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VehicleProvider } from './context/VehicleProvider';
import { UserProvider } from './context/UserProvider';
import Navigation from './components/Navigation';
import SignUp from './pages/SignUp';
import NewVehicle from './pages/NewVehicle';
import Login from './pages/Login';
import globalStyles from './assets/css/global.css'
import AboutUs from './pages/AboutUs';
import HandleVehicleList from './components/HandleVehicleList';

function App() {
  return (
    <UserProvider>
      <VehicleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<HandleVehicleList />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/vehicles/new" element={<NewVehicle />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;