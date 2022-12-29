import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleContext from '../context/VehicleContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Make_Model_Context from '../context/Make_Model_Context';
import NewVehicleMedia from '../components/NewVehicleMedia';
import newVehicleStyles from '../assets/css/NewVehicle.css'

const NewVehicle = () => {
  const navigate = useNavigate();

  const { handleMakes, handleModels, handleChange, newVehicle, uploadedFiles, setUploadedFiles } = useContext(Make_Model_Context)

  const { addVehicle } = useContext(VehicleContext);

  function handleSubmit(event) {
    event.preventDefault();
    addVehicle(newVehicle).then(() => {
      navigate('/vehicles');
    }).catch(error => {
      console.log(error);
      navigate('/signup');
    });
  }

  return (
    <div className='new-vehicle-container'>
      <h1>List Vehicle</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Name" required>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Vehicle Title" name="Name" value={newVehicle.Name} onChange={handleChange} />
        </Form.Group>

        {/* MAKE INPUT */}
        {handleMakes()}

        {/* MODEL INPUT */}
        {newVehicle.hasOwnProperty('Vehicle_Manufacturer') && handleModels()}

        <Form.Group className="mb-3" controlId="Year" required>
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

        <Form.Group className="mb-3" controlId="Price" required>
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="20000" name="Price" value={newVehicle.Price} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Mileage" required>
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

        { /* Media Upload */}
        <NewVehicleMedia uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />

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
    </div>
  )
}

export default NewVehicle