import React, { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext'
import VehicleContext from '../context/VehicleContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import UVcard from './UVcard';
import styles from '../assets/css/UVCards.css'

const UVcards = ({ user }) => {

 const { getCurrentUser } = useContext(UserContext)
 const { deleteVehicle, setVehicles, vehicles } = useContext(VehicleContext);

 useEffect(() => {
  getCurrentUser(user._id).then(result => {
   setVehicles(result.vehicles);
  })
 }, [vehicles.length])

 if (vehicles.length === 0) {
  return (
   <Link to='/vehicles/new'>
    <Button variant='primary'>LIST NEW VEHICLE</Button>
   </Link>
  )
 }

 return (
  <>
   <h2 className="list-heading">YOUR LISTED VEHICLES</h2>
   <div className="uvGrid">
    {vehicles.length > 0 && vehicles.map(vehicle => <UVcard deleteVehicle={deleteVehicle} vehicle={vehicle} key={vehicle._id} />)}
   </div>
   <Link to='/vehicles/new'>
    <Button variant='primary'>LIST NEW VEHICLE</Button>
   </Link>
  </>
 )
}

export default UVcards