import axios from "axios";
import { useEffect, useState } from "react";
import VehicleContext from "./VehicleContext";

export const VehicleProvider = (props) => {

    const [vehicle, setVehicle] = useState([]);
    const baseUrl = "http://localhost:3000/api/vehicles/";

    useEffect(() => {
        async function fetchData() {
            await getAllVehicles();
        }
        fetchData();
    }, []);

    function getAllVehicles() {
        return axios.get(baseUrl).then(response => setVehicle(response.data));
    }

    function getSingleVehicle(id) {
        return axios.get(`${baseUrl}/${id}`).then(response => new Promise((resolve) => resolve(response.data)))
            .catch((error) => console.log(error));
    }

    function addVehicle(single_vehicle) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('')}`
        };

        return axios.post(baseUrl, single_vehicle, { headers: myHeaders })
            .then(response => {
                getAllVehicles();
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editVehicle(single_vehicle) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('')}`
        };
        return axios.put(`${baseUrl}/${single_vehicle._id}`, single_vehicle, { headers: myHeaders })
            .then(response => {
                getAllVehicles();
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deleteVehicle(single_vehicle) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('')}`
        };
        return axios.delete(`${baseUrl}/${single_vehicle._id}`, { headers: myHeaders })
            .then(response => {
                getAllVehicles();
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    return (
        <VehicleContext.Provider value={{
            vehicle,
            getSingleVehicle,
            addVehicle,
            editVehicle,
            deleteVehicle
        }}>
            {props.children}
        </VehicleContext.Provider>
    )
}