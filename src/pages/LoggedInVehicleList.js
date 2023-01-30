import { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import CarPhoto from "../components/CarPhoto";
import UserContext from "../context/UserContext";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/VehicleList.module.css';

const LoggedInVehicleList = () => {

    let navigate = useNavigate();

    let { getOneUser } = useContext(UserContext)

    function prettifyNumber(number) {
        return new Intl.NumberFormat().format(number);
    }

    function handleStatus(v) {
        if (v.Status === 'Sold') {
            return
        } else {
            return (
                <Col key={v._id}>
                    <Card className={styles.card}>
                        <Card.Img variant="top" className={styles.img} src={handleImage(v)}></Card.Img><br />
                        <div className={styles.textContainer}>
                            <Card.Title className={styles.vehicleTitle}>{v.Name}</Card.Title>
                            <Card.Text>${prettifyNumber(v.Price)}</Card.Text>
                        </div>
                        <Card.Subtitle className={styles.subtitle}>{v.Status}</Card.Subtitle>
                        <Card.Text className={styles.mileage}>{v.Mileage.toLocaleString('en-US')} miles</Card.Text>
                        <div className={styles.linkContainer}>
                            <a className={styles.cardLink} href={`/vehicles/${v._id}`}>LEARN MORE</a>
                            <Button onClick={() => { handleClick(v) }}>CONTACT SELLER</Button>
                        </div>
                    </Card>
                </Col>
            )
        }
    }

    function handleImage(v) {
        if (v.Images) {
            return v.Images
        } else {
            return "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
        }
    }

    function handleClick(v) {
        let userId = v.Posted_By
        let subject = 'Is This Vehicle Still Available?'
        if (userId) {
            getOneUser(userId)
                .then((user) => {
                    let body = `Hello, ${user.firstName}. Is the ${v.Name} still available?`
                    console.log(user)
                    window.open(`mailto:${user.email}?subject=${subject}&body=${body}`)
                })
        } else {
            window.alert('Seller Contact Info Not Found')
        }
    }


    return (
        <>
            <VehicleContext.Consumer>
                {
                    ({ vehicle }) => {
                        return <>
                            <CarPhoto />
                            <div className={styles.container}>
                                <h2 className={styles.header}>VEHICLES:</h2>
                                <Button className={styles.button} onClick={() => {
                                    navigate('/vehicles/new')
                                }}>LIST VEHICLE</Button>
                            </div>
                            <Row xs={1} md={2} className="g-5">
                                {vehicle.map((v) => {
                                    return (
                                        handleStatus(v)
                                    )
                                })}
                            </Row>
                        </>
                    }
                }
            </VehicleContext.Consumer>
        </>
    )
}

export default LoggedInVehicleList;