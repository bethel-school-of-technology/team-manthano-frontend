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
                        <Card.Title className={styles.vehicleTitle}>{v.Name}</Card.Title>
                        <div className={styles.textContainer}>
                            <a className={styles.vehicleInspectLink} href={`/vehicles/${v._id}`}>LEARN MORE</a>
                            <Card.Text>LOGIN TO SEE PRICE</Card.Text>
                        </div><br />
                        <Card.Img className={styles.img} src={handleImage(v)}></Card.Img><br />
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