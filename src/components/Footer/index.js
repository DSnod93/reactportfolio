import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container, Row } from 'react-bootstrap';

const Footer = (props) => {
    return (
        <Container fluid className="p-2" style={{background:"#404040"}} >
            <Row className="justify-content-center">
                <div className="mt-2">
                    <a className="m-5">
                        <span><SocialIcon url="https://linkedin.com/in/douglassnoddy" fgColor="#ffffff" /></span>
                    </a>
                    <a>
                        <span><SocialIcon url="https://github.com/DSnod93" bgColor="#696969" fgColor="#ffffff" /></span>
                    </a>
                </div>
            </Row>
            <div>
                    <p className="m-0 text-white">
                        © 2021 Douglas Snoddy
                    </p>
                </div>
        </Container>
    )
}

export default Footer;
