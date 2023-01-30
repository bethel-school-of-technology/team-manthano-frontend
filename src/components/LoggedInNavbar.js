import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from '../public/stylesheets/Navbar.module.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoggedInNavbar = () => {

    let navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem('currentUser')))
    }, [])

    function handleClick() {
        navigate('/')
    }

    return (
        <Navbar className={styles.navbar} expand="lg" variant="dark">
            <Container>
                <div onClick={handleClick}>
                    <h1 className={styles.brand}><i className="bi bi-record-circle-fill" style={{ 'color': '#FFD6E0' }}></i> DONUT CAR SHOP</h1>
                </div>
                <Nav>
                    <p className={styles.greeting}>HELLO, <Link className={styles.user} to="/account">{loggedInUser.username}</Link></p>
                    <button className={styles.button} onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem("userToken")
                        localStorage.removeItem("currentUser")
                        navigate('/')
                        window.location.reload('/')
                        this.props.history.push('/')
                    }}>LOG OUT</button>
                    <Nav.Link href="/about-us">ABOUT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default LoggedInNavbar;