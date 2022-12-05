import axios from "axios";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const [ user, setUser ] = useState([]);
    const baseUrl = "http://localhost:3000/api/users/";

    useEffect(() => {
        async function fetchData() {
            await getCurrentUser();
        }
        fetchData();
    }, []);

    function createUser(username, password, firstName, lastName, favoriteGenre) {
        let user = { username, password, firstName, lastName, favoriteGenre };

        return axios.post(baseUrl, user).then(response => {
            return new Promise(resolve => resolve(response.data));
        })
    }

    function signInUser(username, password) {
        let user = { username, password };

        return axios.post(`${baseUrl}/login`, user).then(response => {
            localStorage.setItem('myGruveToken', response.data.token)
            return new Promise(resolve => resolve(response.data));
        })
    }

    function getCurrentUser() {
        let headers = {
            Authorization: `Bearer ${localStorage.getItem('myGruveToken')}`
        }; 

        return axios.get(`${baseUrl}/current`, { headers }).then(response => setUser(response.data));
    }

    return (
        <UserContext.Provider value={{
            user,
            createUser,
            signInUser,
            getCurrentUser
        }}>
            { props.children }
        </UserContext.Provider>
    )
}