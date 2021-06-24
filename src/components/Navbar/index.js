import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MainNav = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto nav-pill" >
                        <Nav.Link className="text-white" href="#about">About</Nav.Link>
                        <Nav.Link className="text-white" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="text-white" href="#resume">Resume</Nav.Link>
                        <Nav.Link className="text-white" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>        
            </>
    )
}

export default MainNav;
