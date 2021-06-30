import React, { Component } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import project1 from '../images/cuisine-time.jpg';
import project2 from '../images/food-blog.JPG';
import project3 from '../images/foodchain.JPG';


const Projects = () => {
    return (
        <Container className="text-center" fluid>
            <Row>
                <Col md={true}>
                    <Image src={project1} width="300" />
                    <h3 className="mt-4">Cuisine Time</h3>
                    <p>HTML, CSS, Javascript</p>
                    <Button className="m-5"><a></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image src={project2} width="350" height="320" />
                    <h3 className="mt-4">DishADay</h3>
                    <p>Javascript, CSS, Mysql2, Sequelize, bcrypt, Materialize, Express, Node</p>
                    <Button className="m-4"><a></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image src={project3} width="350" height="320" />
                    <h3 className="mt-4">The Food Chain</h3>
                    <p>MongoDB, Express, React, Node, JWT, Stripe, Materialize, GraphQL, bcrypt, Mongoose</p>
                    <Button className="m-4"><a></a>Click Here</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;
