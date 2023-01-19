import React, { useContext } from 'react'
import imgstyles from '../assets/css/img.css'
import {
 StaticGoogleMap,
 Marker
} from 'react-static-google-map';
import UserContext from '../context/UserContext'

const MapsAPI = (props) => {
 const { getSingleUser } = useContext(UserContext)

 return (
  <StaticGoogleMap size="600x600" apiKey="AIzaSyDRXjXx77oZ6bA2rk3NJ6K5ZkEQ8gYP2DM" className="map">
   <Marker.Group label="" color="red">
    <Marker location="68506" />
   </Marker.Group>
  </StaticGoogleMap>
 );
}

export default MapsAPI