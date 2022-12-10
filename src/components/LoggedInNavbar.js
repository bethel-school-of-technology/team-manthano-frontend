import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import styles from '../public/stylesheets/Navbar.module.css';

const LoggedInNavbar = () => {

    const { user } = useContext(UserContext);

    return (
        <Navbar className={styles.navbar} expand="lg" variant="dark">
            <Container>
                <h1 className={styles.brand}><i className="bi bi-record-circle-fill" style={{ 'color': '#FFD6E0' }}></i> DONUT CAR SHOP</h1>
                <Nav>
                    <p className={styles.greeting}>HELLO, <a className={styles.user} href={`/profile/${user._id}`}>{user.username}</a></p>
                    <button className={styles.button} onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem("myGruveToken")
                        this.props.history.push('/')
                    }}>LOG OUT</button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default LoggedInNavbar;