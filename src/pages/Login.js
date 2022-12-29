import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { Form } from "react-bootstrap";
import styles from '../public/stylesheets/Login.module.css';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        signInUser(username, password).then(() => {
            navigate('/'); // will navigate user to whatever route is used for the vehicle list 
            window.alert(`Hello ${username}`);
        }).catch(error => {
            console.log(error);
            setErrorMsg('Login Attempt Failed.  Please Try Again.');
        });
    }

    return (
        <>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.header}>LOGIN</h1>
                {errorMsg && <p className='error'>{errorMsg}</p>}
                <Form.Group className="w-100">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder='ENTER USERNAME' type='text' name='username' onChange={e => setUsername(e.target.value)} />
                    <br />
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder='ENTER PASSWORD' type='password' name='password' onChange={e => setPassword(e.target.value)} />
                    <br />
                    <button type='submit' className={styles.button}>SIGN IN</button> <br /><br />
                    <p>Already Have an Account? <button className={styles.button} onClick={() => {navigate('/signup')}}>SIGN UP</button></p>
                </Form.Group>
            </Form>
        </>
    )
}

export default Login