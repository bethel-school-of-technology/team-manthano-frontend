import React, { useContext, useEffect, useState } from "react";
import { VehicleProvider } from "../context/VehicleProvider";
import { useParams } from "react-router-dom";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/VehicleList.module.css';

function prettifyNumber(number) {
  return new Intl.NumberFormat().format(number);
}

const Details = ({ getSingleVehicle }) => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
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
            <h3>Condition</h3>
            {vehicle.Condition}
          </div>
          <div>
          <h3>Year</h3>
            {vehicle.Year}
          </div>
          <div>
          <h3>Name</h3>
            {vehicle.Name}
          </div>
          <div>
            <h3>Body_Style</h3>
            {console.log(vehicle.Body_Style)}
          </div>
          <div>
            <h3>Vehicle_Manufacturer</h3>
            {console.log(vehicle.Vehicle_Manufacturer)}
          </div>
          <div>
            <h3>Vehicle_Model</h3>
            {console.log(vehicle.Vehicle_Model)}
          </div>
          <div>
            <h3>Fuel_Economy</h3>
            {console.log(vehicle.Fuel_Economy)}
          </div>
          <div>
            <h3> Exterior_Color</h3>
            {console.log(vehicle.Exterior_Color)}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const WrappedDetails = () => {
  return (
    <VehicleContext.Consumer>
      {({ getSingleVehicle }) => {
        return <Details getSingleVehicle={getSingleVehicle}></Details>;
      }}
    </VehicleContext.Consumer>
  );
};

export default WrappedDetails;
