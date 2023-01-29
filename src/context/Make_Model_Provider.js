import React, { useState, useEffect } from 'react'
import Make_Model_Context from './Make_Model_Context'
import axios from "axios";
import Form from 'react-bootstrap/Form';

const Make_Model_Provider = (props) => {

 const baseUrl = "http://localhost:3000/api/makes/";

 const [makes, setMakes] = useState({});
 const [uploadedFiles, setUploadedFiles] = useState([])
 var [newVehicle, setNewVehicle] = useState({
  Name: '',
  Vehicle_Manufacturer: '',
  Vehicle_Model: '',
  Year: '',
  Price: '',
  Mileage: '',
  Body_Style: 'Convertible',
  Exterior_Color: 'Black',
  Condition: 'New',
  Status: 'For Sale',
  Images: [],
  Posted_By: JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser'))._id : ''
 });

 function handleChange(event) {
  setNewVehicle((prevValue) => {
   return { ...prevValue, [event.target.name]: event.target.value }
  });
 }

 function getAllMakes() {
  return axios.get(baseUrl).then(response => {
   if (response.data.length > 0) {
    setMakes(response.data[0].manufacturers)
   }
  });
 }

 useEffect(() => {
  async function fetchData() {
   await getAllMakes();
  }
  fetchData();
 }, []);

 const handleMakes = () => {
  var keys = Object.keys(makes);
  return (
   <Form.Group className="mb-3" controlId="Vehicle_Manufacturer">
    <Form.Label>MANUFACTURER</Form.Label>
    <Form.Select name="Vehicle_Manufacturer" onChange={handleChange} required>
     <option value="">Manufacturer</option>
     {keys.map(make => {
      if (make !== '_id') {
       return <option key={make} value={make}>{make}</option>
      }
     })}
    </Form.Select>
   </Form.Group>
  )
 }

 const handleModels = () => {
  var entries = Object.entries(makes);
  var filtered_entries = entries.filter(([key, value]) => key === newVehicle.Vehicle_Manufacturer);
  if (filtered_entries.length === 0) {
   return;
  }
  return (
   <Form.Group className="mb-3" controlId="Vehicle_Model">
    <Form.Label>MODEL</Form.Label>
    <Form.Select name="Vehicle_Model" onChange={handleChange} required>
     <option value="">Model</option>
     {filtered_entries[0][1].map(model => {
      return <option key={model} value={model}>{model}</option>
     })}
    </Form.Select>
   </Form.Group>
  )
 }

 useEffect(() => {
  uploadedFiles.map(file => newVehicle.Images.push(JSON.stringify(file)))
 }, [uploadedFiles])

 return (
  <Make_Model_Context.Provider value={{
   makes,
   handleMakes,
   handleChange,
   handleModels,
   newVehicle,
   uploadedFiles,
   setUploadedFiles
  }}>
   {props.children}
  </Make_Model_Context.Provider>
 )
}

export default Make_Model_Provider