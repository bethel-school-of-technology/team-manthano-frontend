import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VehicleInfo = (props) => {
    // if vehicle-info/id is used:
    //  show that specific vehicles info
    // .com/vehicle-info/1234

    // if no id parameter, show the list of cars
    // .com/vehicle-info/
    const vehicleId = useParams()
    console.log(vehicleId) // this will console.log the vehicles id

    if( !vehicleId ){
        return <p>List of Cars</p>
    }

    return <h2>Car with Id {vehicleId}</h2>
}

export default VehicleInfo