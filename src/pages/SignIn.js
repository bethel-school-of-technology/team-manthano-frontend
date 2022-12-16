import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignIn = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [errorMsg, setErrorMsg] = useState('');

 let { signInUser } = useContext(UserContext);
 let navigate = useNavigate();

 function handleSubmit(event) {
  event.preventDefault();
  signInUser(username, password).then(() => {
   navigate('/');
  }).catch(error => {
   console.log(error);
   setErrorMsg('Sign in attempt failed.  Please try again.');
  });
 }

 return (
  <>
   <h1>SIGN IN</h1>
   {errorMsg && <p className='error'>{errorMsg}</p>}

   <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="username">
     <Form.Label>Username</Form.Label>
     <Form.Control type="text" placeholder="username" name="Username" onChange={e => setUsername(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="password">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" name="Password" onChange={e => setPassword(e.target.value)} />
    </Form.Group>

    <Button variant="primary" type="submit">
     Sign In
    </Button>
   </Form>
  </>

 )
}

export default SignIn