import styles from '../public/stylesheets/NotFound.module.css';

const NotFound = () => {
    return (
        <>
            <div className={styles.backgroundContainer}></div>
            <h1 className={styles.heading}>OOPS... PAGE NOT FOUND</h1>
            <h5 className={styles.txt}>CLICK OUR BEAUTIFULLY CRAFTED LOGO TO RETURN TO THE GARAGE</h5>
        </>
    )
}

export default NotFound;