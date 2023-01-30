import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const UVcard = ({ vehicle, deleteVehicle }) => {
 const { Status, Mileage, Name, Price, Images, _id } = vehicle;
 const baseUrl = "http://localhost:3000/api/vehicles/";

 return (
  <Card>
   <Card.Img variant="top" src={Images} />
   <Card.Body>
    <div className="col">
     <Card.Title>{Name}</Card.Title>
     <Card.Subtitle className="mb-2 text-muted subtitle">{Status}</Card.Subtitle>
     <Card.Text>{Mileage.toLocaleString('en-US')} miles</Card.Text>
    </div>
    <div className="col"><Card.Text>${Price.toLocaleString('en-US')}</Card.Text></div>
   </Card.Body>
   <div className="btns">
    <Link to={`${_id}`}>
     <Button variant='primary'>UPDATE VEHICLE</Button>
    </Link>
    <Button className='delete-btn' variant='danger' onClick={() => deleteVehicle(vehicle)}>REMOVE VEHICLE</Button>
   </div>
  </Card>
 )
}

export default UVcard