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
import AboutUs from './pages/AboutUs';
import HandleVehicleList from './components/HandleVehicleList'
import Detail from './pages/Detail';
import EditVehicle from './pages/EditVehicle';
import NotFound from './pages/NotFound';
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
              <Route path="/vehicles/:id" element={<Detail />} />
              <Route path="/vehicles/new" element={<NewVehicle />} />
              <Route path="/account" element={<UserAccount />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/account/:id" element={<EditVehicle />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </VehicleProvider>
    </UserProvider>
  );
}

export default App;