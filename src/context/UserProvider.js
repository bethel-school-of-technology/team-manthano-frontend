import axios from "axios";
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const [allUsers, setAllUsers] = useState([]);
    const baseUrl = "http://localhost:3000/api/users/";

    useEffect(() => {
        async function fetchData() {
            // await getCurrentUser();
            await getAllUsers();
        }
        fetchData();
    }, []);

    function createUser(username, password, firstName, lastName, email, phone, zip, profile_image) {
        let user = { username, password, firstName, lastName, email, phone, zip, profile_image };

        return axios.post(baseUrl, user).then(response => {
            return new Promise(resolve => resolve(response.data));
        })
    }

    function getAllUsers() {
        return axios.get(baseUrl).then(response => {
            return setAllUsers(response.data);
        });
    }

    function signInUser(username, password) {
        let user = { username, password };

        return axios.post(`${baseUrl}/signin`, user).then(response => {
            localStorage.setItem('myGruveToken', response.data.token)
            return new Promise(resolve => {
                const currentUser = allUsers.find(user => user.username === username);
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                return resolve(response.data);
            });
        });
    }

    function getCurrentUser() {
        let reqHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myGruveToken')}`
        };
        return axios.get(baseUrl, { headers: reqHeaders });
    }

    return (
        <UserContext.Provider value={{
            createUser,
            signInUser,
            getCurrentUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}