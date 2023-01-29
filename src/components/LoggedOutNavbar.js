import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from '../public/stylesheets/Navbar.module.css';

const LoggedOutNavbar = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }

    return (
        <>
            <Navbar className={styles.navbar} expand="lg" variant="dark" sticky="top">
                <Container>
                    <div onClick={handleClick}>
                        <h1 className={styles.brand}><i className="bi bi-record-circle-fill" style={{ 'color': '#FFD6E0' }}></i> DONUT CAR SHOP</h1>
                    </div>
                    <Nav>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                        <Nav.Link href="/signup">SIGN UP</Nav.Link>
                        <Nav.Link href="/about-us">ABOUT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default LoggedOutNavbar;