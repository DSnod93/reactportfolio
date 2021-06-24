import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait, faProjectDiagram, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MainNav = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto nav-pill" >
                        <Nav.Link className="text-white" href="#about">
                            <FontAwesomeIcon icon={faPortrait} /> &nbsp;
                            About
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#projects">
                            <FontAwesomeIcon icon={faProjectDiagram} />  &nbsp;
                            Projects
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#resume">
                            <FontAwesomeIcon icon={faFile} />  &nbsp;
                            Resume
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#contact">  
                            <FontAwesomeIcon icon={faEnvelope} />  &nbsp;
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MainNav;
