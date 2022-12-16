import { Navbar, Nav, Container } from "react-bootstrap";
import styles from '../public/stylesheets/Navbar.module.css';

const LoggedOutNavbar = () => {

    return (
        <>
            <Navbar className={styles.navbar} expand="lg" variant="dark" sticky="top">
                <Container>
                    <h1 className={styles.brand}><i className="bi bi-record-circle-fill" style={{ 'color': '#FFD6E0' }}></i> DONUT CAR SHOP</h1>
                    <Nav>
                        <Nav.Link href="/signin">LOGIN</Nav.Link>
                        <Nav.Link href="/signup">SIGN UP</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default LoggedOutNavbar;