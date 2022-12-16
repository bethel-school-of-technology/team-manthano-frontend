import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleContext from '../context/VehicleContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewVehicle = () => {
 const navigate = useNavigate();

 var [newVehicle, setNewVehicle] = useState({});

 const { addVehicle } = useContext(VehicleContext);

 function handleChange(event) {
  console.log("E: ", newVehicle)
  setNewVehicle((prevValue) => {
   return { ...prevValue, [event.target.name]: event.target.value }
  });
 }

 function handleSubmit(event) {
  event.preventDefault();
  addVehicle(newVehicle).then(() => {
   navigate('/vehicles');
  }).catch(error => {
   console.log(error);
   // navigate('/signup');
  });
 }

 return (
  <>
   <h1>New Vehicle</h1>
   <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="Name">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" placeholder="Vehicle Title" name="Name" value={newVehicle.Name} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Vehicle_Manufacturer">
     <Form.Label>Manufacturer</Form.Label>
     <Form.Control type="text" placeholder="Manufacturer" name="Vehicle_Manufacturer" value={newVehicle.Vehicle_Manufacturer} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Vehicle_Make">
     <Form.Label>Make</Form.Label>
     <Form.Control type="text" placeholder="Make" name="Vehicle_Make" value={newVehicle.Vehicle_Make} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Year">
     <Form.Label>Year</Form.Label>
     <Form.Control required type="text" placeholder={new Date().getFullYear()} name="Year" value={newVehicle.Year} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Condition">
     <Form.Label>Condition</Form.Label>
     <Form.Select name="Condition" onChange={handleChange}>
      <option value="New">New</option>
      <option value="Used">Used</option>
     </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="Price">
     <Form.Label>Price</Form.Label>
     <Form.Control type="text" placeholder="20000" name="Price" value={newVehicle.Price} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Mileage">
     <Form.Label>Mileage</Form.Label>
     <Form.Control required type="number" placeholder="50000" name="Mileage" value={newVehicle.Mileage} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Body_Style">
     <Form.Label>Body Style</Form.Label>
     <Form.Select name="Body_Style" onChange={handleChange}>
      <option value="Convertible">Convertible</option>
      <option value="Sedan">Sedan</option>
      <option value="Hatchback">Hatchback</option>
      <option value="SUV/Crossover">SUV/Crossover</option>
      <option value="Truck">Truck</option>
      <option value="Van/MiniVan">Van/MiniVan</option>
     </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="FE_city">
     <Form.Label>City</Form.Label>
     <Form.Control step="1" max="100" min="0" type="number" placeholder="20" name="city" value={newVehicle?.Fuel_Economy?.city} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="FE_hwy">
     <Form.Label>Highway</Form.Label>
     <Form.Control step="1" max="100" min="0" type="number" placeholder="30" name="highway" value={newVehicle?.Fuel_Economy?.highway} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="FE_combined">
     <Form.Label>Combined</Form.Label>
     <Form.Control step="1" max="100" min="0" type="number" placeholder="25" name="combined" value={newVehicle?.Fuel_Economy?.combined} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="Exterior_Color">
     <Form.Label>Exterior Color</Form.Label>
     <Form.Select name="Exterior_Color" onChange={handleChange}>
      <option value="Black">Black</option>
      <option value="Blue">Blue</option>
      <option value="Brown">Brown</option>
      <option value="Burgundy">Burgundy</option>
      <option value="Gray">Gray</option>
      <option value="Green">Green</option>
      <option value="White">White</option>
      <option value="Silver">Silver</option>
      <option value="Red">Red</option>
     </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="Status">
     <Form.Label>Status</Form.Label>
     <Form.Select name="Status" onChange={handleChange}>
      <option value="For Sale">For Sale</option>
      <option value="Pending">Pending</option>
      <option value="Sold">Sold</option>
     </Form.Select>
    </Form.Group>

    <Button variant="primary" type="submit">
     Add Vehicle Listing
    </Button>
   </Form>
  </>
 )
}

export default NewVehicle