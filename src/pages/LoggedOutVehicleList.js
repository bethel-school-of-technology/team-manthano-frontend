import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import CarPhoto from "../components/CarPhoto";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/VehicleList.module.css';

const LoggedOutVehicleList = () => {

    let navigate = useNavigate();

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
                            <Row xs={1} lg={2} className="g-5">
                                {vehicle.map((v) => {
                                    console.log(v)
                                    return (
                                        <Col key={v._id}>
                                            <Card className={styles.card}>
                                                <Card.Title className={styles.vehicleTitle}>{v.Name}</Card.Title>
                                                <div className={styles.textContainer}>
                                                    <a className={styles.vehicleInspectLink} href={`/vehicles/${v._id}`}>INSPECT</a>
                                                    <Card.Text>LOGIN TO SEE PRICE</Card.Text>
                                                </div>
                                            </Card>
                                        </Col>
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