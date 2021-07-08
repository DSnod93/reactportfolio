import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import me from '../images/me.jpg';


const AboutMe = () => {
    return (
        <Container>
            <Row xs={1} md={2}>
                <Col md={6}>
                    <h3>About Me</h3>
                    <div className="border-line"></div>
                    <p className="abt-text">
                        My name is Douglas Snoddy. I am a bootcamp graduate with extensive background in coding languages, frameworks, and building user-friendly web applications. I have knowledge and experience using Javascript. Professional strengths include creative problem-solving, written and verbal communication, and time management. Patience and desire to continue growing and learning.
                    </p>
                    <span >
                        <FontAwesomeIcon icon={faArrowRight} size='5x' className="abt-arrow"/> &nbsp;
                    </span>
                </Col>
                <div>
                    <div>
                        <Image src={me} fluid width="500" />
                    </div>
                </div>
            </Row>
        </Container>

        // <div>
        //     <section>
        //         <div className="row">
        //             <ul className="slides">
        //                 <li style={{ backgroundImage: 'url()' }}>
        //                     <div className="overlay" />
        //                     <div className="container-fluid">
        //                         <div className="row">
        //                             <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
        //                                 <div className="slider-text-inner js-fullheight">
        //                                     <div className="desc">
        //                                         <h1>Hi! <br />I'm Jackson</h1>
        //                                         <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
        //                                         <p><a className="btn btn-primary btn-learn">Download CV <em className="icon-download4" /></a></p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li style={{ backgroundImage: 'url()' }}>
        //                     <div className="overlay" />
        //                     <div className="container-fluid">
        //                         <div className="row">
        //                             <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
        //                                 <div className="slider-text-inner">
        //                                     <div className="desc">
        //                                         <h1>I am <br />a Designer</h1>
        //                                         <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
        //                                         <p><a className="btn btn-primary btn-learn">View Portfolio <em className="icon-briefcase3" /></a></p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </li>
        //             </ul>
        //         </div>
        //     </section>

        // </div>
    )
}

export default AboutMe;
