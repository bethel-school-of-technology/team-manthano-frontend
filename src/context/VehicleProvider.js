import axios from "axios";
import { useEffect, useState } from "react";
import VehicleContext from "./VehicleContext";

export const VehicleProvider = (props) => {

    const [vehicle, setVehicle] = useState([]);
    const baseUrl = "http://localhost:3000/api";

    useEffect(() => {
        async function fetchData() {
            await getAllVehicles();
        }
        fetchData();
    }, []);

    function getAllVehicles() {

    }

    function getSingleVehicle() {

    }

    function addVehicle() {

    }

    function editVehicle() {

    }

    function deleteVehicle() {

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