import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import VehicleContext from "../context/VehicleContext";
import styles from '../public/stylesheets/Detail.module.css';
import MapsAPI from '../components/MapsAPI'
import { Button, Card } from "react-bootstrap";
import moment from 'moment';
import UserContext from "../context/UserContext";

// changes the numbers to include a comma
function prettifyNumber(number) {
    return new Intl.NumberFormat().format(number);
}

//renders if a user is logged out
const LoggedOutDetails = () => {

    const [vehicle, setVehicle] = useState(null);

    const { id } = useParams();

    let { getSingleVehicle } = useContext(VehicleContext);

    useEffect(() => {
        const fetchVehicle = async () => {
            setVehicle(await getSingleVehicle(id));
        };

        fetchVehicle();
    }, [id]);


    if (vehicle === null) {
        return <></>;
    }

    function handleImage(v) {
        if (v.Images) {
            return v.Images
        } else {
            return "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
        }
    }

    let date = moment(vehicle.Posted_At).format('M/DD/YYYY HH:mm');

    console.log(vehicle)

    return (
        <>
            <Card className={styles.card}>
                <div className={styles.container}>
                    <h3>{vehicle.Name} - <a className={styles.link} href="/login">Login to See Price</a></h3>
                    <Card.Text className={styles.user}>{date}</Card.Text>
                </div>
                <Card.Img className={styles.img} src={handleImage(vehicle)}></Card.Img>
                <div className={styles.textContainer}>
                    <div className={styles.textDivider}>
                        <Card.Title>Year: {vehicle.Year}</Card.Title>
                        <Card.Title>Make: {vehicle.Vehicle_Manufacturer}</Card.Title>
                        <Card.Title>Model: {vehicle.Vehicle_Model}</Card.Title>
                    </div>
                    <div className={styles.textDivider}>
                        <Card.Title>Condition: {vehicle.Condition}</Card.Title>
                        <Card.Title>Mileage: {prettifyNumber(vehicle.Mileage)} Miles</Card.Title>
                    </div>
                    <div className={styles.textDivider}>
                        <Card.Title>Body Style: {vehicle.Body_Style}</Card.Title>
                        <Card.Title>Status: {vehicle.Status}</Card.Title>
                    </div>
                </div>
            </Card>
        </>
    )
}

//renders if a user is logged in
const LoggedInDetails = () => {

    const [vehicle, setVehicle] = useState(null);

    const { id } = useParams();

    let { getSingleVehicle } = useContext(VehicleContext);
    let { getOneUser } = useContext(UserContext);

    useEffect(() => {
        const fetchVehicle = async () => {
            setVehicle(await getSingleVehicle(id));
        };

        fetchVehicle();
    }, [id]);


    if (vehicle === null) {
        return <></>;
    }

    function handleImage(v) {
        if (v.Images) {
            return v.Images
        } else {
            return "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
        }
    }

    let date = moment(vehicle.Posted_At).format('M/DD/YYYY HH:mm');

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
            <Card className={styles.card}>
                <div className={styles.container}>
                    <h3>{vehicle.Name} - ${prettifyNumber(vehicle.Price)}</h3>
                    <Card.Text className={styles.user}>{date}</Card.Text>
                </div>
                <Card.Img className={styles.img} src={handleImage(vehicle)}></Card.Img>
                <div className={styles.textContainer}>
                    <div className={styles.textDivider}>
                        <Card.Title>Year: {vehicle.Year}</Card.Title>
                        <Card.Title>Make: {vehicle.Vehicle_Manufacturer}</Card.Title>
                        <Card.Title>Model: {vehicle.Vehicle_Model}</Card.Title>
                    </div>
                    <div className={styles.textDivider}>
                        <Card.Title>Condition: {vehicle.Condition}</Card.Title>
                        <Card.Title>Mileage: {prettifyNumber(vehicle.Mileage)} Miles</Card.Title>
                    </div>
                    <div className={styles.textDivider}>
                        <Card.Title>Body Style: {vehicle.Body_Style}</Card.Title>
                        <Card.Title>Status: {vehicle.Status}</Card.Title>
                    </div>
                </div>
                <Button className={styles.button} onClick={() => { handleClick(vehicle) }}>CONTACT SELLER</Button>
            </Card>
        </>
    )
}

// checks if user is logged in, returning correct page
const HandleVehicleDetail = () => {
    let location = useLocation();

    const [token, setToken] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.userToken) {
            setToken(localStorage.userToken)
        }
    }, [location]);

    useEffect(() => {
        if (token) {
            setLoggedIn(true);

        } else if (token === null) {
            setLoggedIn(false);
        }
    }, [token]);

    function handleLogIn() {
        if (loggedIn === false) {
            return <div>
                <LoggedOutDetails />
            </div>
        } else {
            return <div>
                <LoggedInDetails />
            </div>
        }
    }

    return (
        handleLogIn()
    );
}

export default HandleVehicleDetail;