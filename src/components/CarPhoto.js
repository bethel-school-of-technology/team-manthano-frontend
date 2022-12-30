import styles from '../public/stylesheets/CarPhoto.module.css';

const CarPhoto = () => {
    return (
        <>
            <div className={styles.carPhoto}>
                <div className={styles.carPhotoContent}>
                    <h1 className={styles.txt}>DON'T GET SPUN AROUND WHEN BUYING A CAR</h1>
                </div>
            </div>
        </>
    )
}

export default CarPhoto;