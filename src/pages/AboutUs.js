import React, { Fragment, useState } from 'react';
import "../public/stylesheets/About.css";


const AboutUs = () => {
    const [toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) => {
        setToggleTab(index)
    }
    return (
        <Fragment>
            <section className="about">
                <div className="about-row">
                    <div className="column">
                        <div className="about-img"></div>
                    </div>
                    <div className="column">
                        <div className="tabs">

                            <div className={toggleTab === 1 ? "single-tab active-tab" : "single-tab"} onClick={() => toggleState(1)}>
                                <h2>About</h2>
                            </div>

                            <div className={toggleTab === 2 ? "single-tab active-tab" : "single-tab"} onClick={() => toggleState(2)}>
                                <h2>Why Choose Us ?</h2>
                            </div>

                            <div className={toggleTab === 3 ? "single-tab active-tab" : "single-tab"} onClick={() => toggleState(3)}>
                                <h2>Are Promise</h2>
                            </div>

                        </div>

                        <div className="tab-content">
                            {/*About Content*/}

                            <div className={toggleTab === 1 ? "content active-content" : "content"}>
                                <h2>About</h2>
                                <p>Our online car buying and selling business offers a convenient and streamlined platform for buying and selling vehicles. With a wide selection of cars, competitive pricing, and easy-to-use tools for listing and searching for vehicles, we make the car buying and selling process simple and hassle-free. Whether you’re looking to upgrade your current ride or sell your old car, our platform is the perfect solution.</p>
                            </div>


                            {/*Why Choose Us Content*/}

                            <div className={toggleTab === 2 ? "content active-content" : "content"}>
                                <h2>Why Choose Us ?</h2>
                                <p>Choose us for our vast selection of quality vehicles, competitive pricing, and user-friendly platform. Our team of experts are dedicated to providing a seamless and stress-free buying and selling experience. Trust us to help you find the perfect car or sell your vehicle quickly and efficiently.</p>
                            </div>

                            {/*Are Promise Content*/}

                            <div className={toggleTab === 3 ? "content active-content" : "content"}>
                                <div className="promise-column">
                                    <h2>What Is Are Promise?</h2>
                                    <p>Our promise is to provide you with a transparent and easy car buying and selling experience. We guarantee a wide selection of quality vehicles, fair pricing, and customer-focused service every step of the way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AboutUs;



