import { Card, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import CarPhoto from "../components/CarPhoto";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/VehicleList.module.css';

const LoggedOutVehicleList = () => {

    function handleStatus(v) {
        if (v.Status === "Sold") {
            return
        } else {
            return (
                <Col key={v._id}>
                    <Card className={styles.card}>
                        <Card.Img className={styles.img} src={handleImage(v)}></Card.Img><br />
                        <div className={styles.textContainer}>
                            <Card.Title className={styles.vehicleTitle}>{v.Name}</Card.Title>
                            <Card.Link href="/login" className={styles.cardLink}>LOGIN TO SEE PRICE</Card.Link>
                        </div>
                            <Card.Subtitle className={styles.subtitle}>{v.Status}</Card.Subtitle>
                            <Card.Text className={styles.mileage}>{v.Mileage.toLocaleString('en-US')} miles</Card.Text>
                        <div className={styles.linkContainer}>
                            <a className={styles.cardLink} href={`/vehicles/${v._id}`}>LEARN MORE</a>
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

    return (
        <>
            <VehicleContext.Consumer>
                {
                    ({ vehicle }) => {
                        return <>
                            <CarPhoto />
                            <div className={styles.container}>
                                <h2 className={styles.header}>VEHICLES:</h2>
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

export default LoggedOutVehicleList;