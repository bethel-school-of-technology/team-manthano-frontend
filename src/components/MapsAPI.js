import React, { useContext, useEffect, useState } from 'react'
import imgstyles from '../assets/css/img.css'
import {
 StaticGoogleMap,
 Marker
} from 'react-static-google-map';
import UserContext from '../context/UserContext'

const MapsAPI = (props) => {
 const { getOneUser } = useContext(UserContext)
 const { postedBy } = props;
 const [userZip, setUserZip] = useState(null)

 useEffect(() => {
  getOneUser(postedBy).then(res => {
   setUserZip(res?.zip)
  }).catch(error => console.log("ERROR: ", error))
 }, [])

 if (!userZip) {
  return;
 }

 return (
  <section className="user-map">
   <p>Seller's location</p>
   <StaticGoogleMap size="500x500" apiKey="AIzaSyDRXjXx77oZ6bA2rk3NJ6K5ZkEQ8gYP2DM" className="map">
    <Marker.Group label="" color="red">
     <Marker location={userZip} />
    </Marker.Group>
   </StaticGoogleMap>
  </section>
 );
}

export default MapsAPI