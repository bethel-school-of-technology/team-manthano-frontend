import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import CarPhoto from "../components/CarPhoto";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/VehicleList.module.css';

const LoggedInVehicleList = () => {

    let navigate = useNavigate();

    function handleDisabled(v) {
        if (v.Status === 'For Sale') {
            return false
        } else {
            return true
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
                                <Button className={styles.button} onClick={() => {
                                    navigate('/vehicles/new')
                                }}>LIST VEHICLE</Button>
                            </div>
                            <Row xs={1} md={2} className="g-5">
                                {vehicle.map((v) => {
                                    return (
                                        <Col key={v._id}>
                                            <Card className={styles.card}>
                                                <Card.Title className={styles.vehicleTitle}>{v.Name}</Card.Title>
                                                <div className={styles.textContainer}>
                                                    <a className={styles.vehicleInspectLink} href={`/vehicles/${v._id}`}>INSPECT</a>
                                                    <Card.Text>${v.Price}</Card.Text>
                                                </div><br/>
                                                <Card.Img className={styles.img} src={handleImage(v)}></Card.Img><br/>
                                                <div className={styles.textContainer}>
                                                    <Card.Text className={styles.vehicleStatus}>{v.Status}</Card.Text>
                                                    <Button disabled={handleDisabled(v)}>BUY NOW</Button>
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

export default LoggedInVehicleList;