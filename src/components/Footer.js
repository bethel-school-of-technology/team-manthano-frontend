import Container from 'react-bootstrap/Container';
import styles from '../public/stylesheets/Navbar.module.css';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className="footer-copyright text-center py-3">
            <Container className={styles.footer} fluid>
                <h1 className={styles.footer}><i className="bi bi-record-circle-fill" style={{ 'color': '#FFD6E0' }}></i> DONUT CAR SHOP
                    &copy; {year} Copyright
                </h1>
            </Container>
        </div>
    )
}

export default Footer;