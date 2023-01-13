import Stack from 'react-bootstrap/Stack';
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import LoggedOutVehicleList from '../pages/LoggedOutVehicleList';
import LoggedInVehicleList from '../pages/LoggedInVehicleList';
import Footer from './Footer';

const HandleVehicleList = () => {

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
                <LoggedOutVehicleList />
            </div>
        } else {
            return <div>
                <LoggedInVehicleList />
            </div>
        }
    }

    return (
        <>
            {handleLogIn()}
            <Stack>
                <Outlet />
            </Stack>
            <Footer />
        </>
    )
}

export default HandleVehicleList;