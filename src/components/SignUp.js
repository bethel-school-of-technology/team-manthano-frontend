import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import styles from '../public/stylesheets/SignUp.module.css';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [zip, setZip] = useState('');
    const [profileImage, setProfileImage] = useState('');

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(email, username, password, firstName, lastName, phone, zip, profileImage).then(() => {
            navigate('/login');
        }).catch(error => {
            console.log(error);
            window.alert('Error Creating User');
        });
    }

    return (
        <Form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.header}>SIGN UP</h1>
            <Form.Group className="w-100">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control placeholder="ENTER EMAIL" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <Form.Label>USERNAME</Form.Label>
                <Form.Control placeholder="ENTER USERNAME" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control placeholder="ENTER PASSWORD" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <Form.Label>FIRST NAME</Form.Label>
                <Form.Control placeholder="ENTER FIRST NAME" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <br />
                <Form.Label>LAST NAME</Form.Label>
                <Form.Control placeholder="ENTER LAST NAME" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                <br />
                <Form.Label>PHONE NUMBER</Form.Label>
                <Form.Control placeholder="ENTER PHONE NUMBER" type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                <br />
                <Form.Label>ZIP CODE</Form.Label>
                <Form.Control placeholder="ENTER ZIP CODE" type="text" name="zip" value={zip} onChange={e => setZip(e.target.value)} />
                <br />
                <Form.Label>PROFILE IMAGE</Form.Label>
                <Form.Control placeholder="ENTER PROFILE IMAGE" type="text" name="profileImage" value={profileImage} onChange={e => setProfileImage(e.target.value)} />
                <br />
                <button type='submit' className={styles.button}>SIGN UP</button> <br /><br />
                <p>Already Have an Account? <button className={styles.button} onClick={() => {navigate('/login')}}>LOGIN</button></p>
            </Form.Group>
        </Form>
    )
}

export default SignUp