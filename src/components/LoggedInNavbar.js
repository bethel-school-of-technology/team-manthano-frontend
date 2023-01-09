import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from '../public/stylesheets/Navbar.module.css';
import { useLocation, useNavigate } from "react-router";

const LoggedInNavbar = () => {

    let location = useLocation();
    let navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem('currentUser')))
    }, [location])

    return (
        <Navbar className={styles.navbar} expand="lg" variant="dark" sticky="top">
            <Container>
                <h1 className={styles.brand}><i className="bi bi-record-circle-fill" style={{ 'color': '#FFD6E0' }}></i> DONUT CAR SHOP</h1>
                <Nav>
                    <p className={styles.greeting}>HELLO, <a className={styles.user} href={`/profile/${loggedInUser._id}`}>{loggedInUser.username}</a></p>
                    <button className={styles.button} onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem("userToken")
                        localStorage.removeItem("currentUser")
                        window.location.reload('/')
                        this.props.history.push('/')
                    }}>LOG OUT</button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default LoggedInNavbar;