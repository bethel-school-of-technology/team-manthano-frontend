import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// Import your pages 
import Home from './pages/Home'
import AddVehicle from './pages/AddVehicle'
import Account from './pages/Account'
import VehicleInfo from './pages/VehicleInfo';
import { useEffect } from 'react';
import useStore from './store/store'

function App() {
  const load = useStore(store => store.get_all_vehicle_info_from_api)
  useEffect(() => {
    load()
  }, [])

  return (
    <>
      <BrowserRouter>
      <Navbar className="Navbar" expand="lg">
        <Navbar bg="grey">
          <img src="">

          </img>
          <Container className="container" class="flex-direction-row">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/add-vehicle">Add Vehicle</Nav.Link>
              {/* Figma says carid/id - so we are using router parameters to get the id */}
              <Nav.Link href="/vehicle-info">Vehicle Info</Nav.Link>
              <Nav.Link href="/account">View Accounts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addVehicle" element={<AddVehicle/>} />
          <Route path="/vehicle-info/:ids" element={<VehicleInfo/>} />
          <Route path="/account" element={<Account/>} />
        </Routes>
      </Navbar>
      </BrowserRouter>

      <footer className="footer">
        <div class="text-left">
          <p>@ Copyright 2022 Donut Car Shop|| BST Group Project</p>
        </div>
      </footer>


  </>

  );
}

export default App;
