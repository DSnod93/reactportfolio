import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron fluid className="header-wrapper">
            <Container className="main-info">
                <h1>Welcome</h1>
            </Container>
        </Jumbotron>
    )
}

export default Header;
