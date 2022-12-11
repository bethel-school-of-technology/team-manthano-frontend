import React, { useEffect, useState } from 'react'
import useStore from '../store/store'

import {Thing} from 'react-bootstrap' 
const Home = (props) => {
    // const total_cars = useStore() // this gets the whole store

    // this subscribes to totalVehicles ONLY - 
    //and will not cause updates or rerenders when the rest of the store changes
    const total_cars = useStore(store => store.totalVehicles)



    const setCars = useStore(store => store.setTotalVehicles)
    
    
    return <div>
        <Thing />
        <h2>Home</h2>
        <p>Total Vehicles: {total_cars}</p>
        <button onClick={() => setCars(5)}>Set 5</button>
        <button onClick={() => setCars(7)}>Set 7</button>
        <button onClick={() => setCars(0)}>Set 0</button>
    </div>
}

export default Home