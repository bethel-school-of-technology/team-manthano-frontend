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
                <div className="row">
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
                                <p>Welcome to are Donut Car Shop! we are a full service, automotive repair and maintenance shop serving your area! Are highly trained and experienced mechanics use only the most quality auto parts during repairs.  We run a clean, efficient, and friendly shop. With competitive pricing and even better deals, so stop on by and see what everyone has been talking about and join in on the experience! </p>
                            </div>


                            {/*Why Choose Us Content*/}

                            <div className={toggleTab === 2 ? "content active-content" : "content"}>
                                <h2>Why Choose Us ?</h2>
                                <p>Our mechanics strive to ensure that your vehicle will be performing at its best before leaving are shop. Our auto repair shop is capable of servicing a variety of makes and models. Our superior standards show that our mechanics always have the best interests of our customers in mind. Looking for a one-stop automotive repair shop? Look no further than us, and allow our mechanics to give you a reliable estimate of any automotive repair issue you might be facing.</p>
                            </div>

                            {/*Are Promise Content*/}

                            <div className={toggleTab === 3 ? "content active-content" : "content"}>
                                <div className="promise-column">
                                    <h2>What Is Are Promise?</h2>
                                    <p>Our goal is to reach 100% satisfaction with our customers. We will never compromise our integrity and believe that honesty is the best policy.We will provide you with the highest level of professional, quality, and friendly service. We understand that sometimes car repairs can be stressful and we will do everything possible to make our customers feel welcome, comfortable and satisfied with their service experience.  Visit us for all of your maintenance and repair needs!  </p>
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



