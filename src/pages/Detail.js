import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/VehicleList.module.css';
import MapsAPI from '../components/MapsAPI'

// changes the numbers to include a comma
function prettifyNumber(number) {
    return new Intl.NumberFormat().format(number);
}

//renders if a user is logged out
const LoggedOutDetails = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    let { getSingleVehicle } = useContext(VehicleContext)

    useEffect(() => {
        const fetchVehicle = async () => {
            setVehicle(await getSingleVehicle(id));
        };
        fetchVehicle();
    }, [id]);

    if (vehicle === null) {
        return <></>;
    }

  return (
    <div style={{marginBottom:30}}>
    <div className="row g-5 row-cols-1">
      <div className="col">
        <div className={`card ${styles.card}`}>
          <h2>{vehicle.Name}</h2>
          <div>
            <img src={vehicle.Images} />
          </div>
          <div>
            <h3>Mileage</h3>
            {prettifyNumber(vehicle.Mileage)} Miles
          </div>
          <div>
            <h3>Price</h3>$ {prettifyNumber(vehicle.Price)}
          </div>
          <div>
            <h3>Status</h3>
            {vehicle.Status}
          </div>
          <div>
            <h3>Year</h3>
            {vehicle.Year}
          </div>
          <div>
            <h3>Posted_At</h3>
            {vehicle.Posted_At}
          </div>
          <div>
            <h3>Condition</h3>
            {vehicle.Condition}
          </div>
          <div>
            <h3>Body_Style</h3>
            {console.log(vehicle)}
          </div>
          <div>
            <h3>Fuel_Economy</h3>
            {console.log(vehicle.Fuel_Economy)}
          </div>
          <div>
            <h3>Exterior_Color</h3>
            {console.log(vehicle.Exterior_Color)}
          </div>
          <div>
            <h3>Vehicle_Model</h3>
            {console.log(vehicle.Vehicle_Model)}
          </div>
          <div>
            <h3>Vehicle_Manufacturer</h3>
            {console.log(vehicle.Vehicle_Manufacturer)}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// checks if user is logged in, returning correct page
const HandleVehicleDetail = () => {
    let location = useLocation();

    const [token, setToken] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.userToken) {
            setToken(localStorage.userToken)
        }
    }, [location]);

    useEffect(() => {
        if (token) {
            setLoggedIn(true);

        } else if (token === null) {
            setLoggedIn(false);
        }
    }, [token]);

    function handleLogIn() {
        if (loggedIn === false) {
            return <div>
                <LoggedOutDetails />
            </div>
        } else {
            return <div>
                 <LoggedInDetails />
            </div>
        }
    }

    return (
        handleLogIn()
    );
}

export default HandleVehicleDetail;