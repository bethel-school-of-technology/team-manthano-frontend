import Stack from 'react-bootstrap/Stack';
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import LoggedOutNavbar from './LoggedOutNavbar';
import LoggedInNavbar from './LoggedInNavbar';
import Footer from './Footer';

const Navigation = () => {

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
                <LoggedOutNavbar />
            </div>
        } else {
            return <div>
                <LoggedInNavbar />
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

export default Navigation;