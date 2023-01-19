import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from '../public/stylesheets/UserAccount.module.css';
import UVcards from "../components/UVcards";

const UserAccount = () => {
    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zip: "",
        profile_image: ""
    });
    let { id } = useParams();

    let { getCurrentUser, updateUser } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {

        getCurrentUser(user).then(result => {
            setUser(result);
        })

    }, [id]);

    function handleChange(event) {
        setUser((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        updateUser(user).then(() => {
            navigate('/account');
            window.alert('Successfully Updated')
        }).catch(error => {
            console.log(error);
            window.alert('Error Updating User')
        })
    }

    return (
        <>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.header}>User Profile</h1>
                <br></br>
                <h3>Edit User Information</h3>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" defaultValue={user.user?.username} name="userName" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" defaultValue={user.user?.firstName} name="firstName" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" defaultValue={user.user?.lastName} name="lastName" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={user.user?.email} name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" defaultValue={user.user?.phone} name="phone" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" defaultValue={user.user?.zip} name="zip" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="text" defaultValue={user.user?.profile_image} name="profile_image" onChange={handleChange} />
                </Form.Group>

                <Button className={styles.button} variant="primary" type="submit">
                    Update User Information
                </Button>
            </Form>

            {/* User Vehicles */}
            {user.hasOwnProperty('user') && (
                <section className="user-vehicles">
                    <UVcards user={user.user} />
                </section>
            )}
        </>
    );

}

export default UserAccount;

