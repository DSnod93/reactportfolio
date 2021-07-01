import React, { Component, } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import project1 from '../images/cuisine-time.jpg';
import project2 from '../images/food-blog.JPG';
import project3 from '../images/foodchain.JPG';
import work1 from '../images/notetaker.JPG';
import work2 from '../images/run-buddy.JPG';
import work3 from '../images/workday.JPG';

const Projects = () => {
    return (
        <Container className="text-center" fluid>
            <Row>
                <Col md={true}>
                    <Image src={project1} width="300" />
                    <h3 className="mt-4">Cuisine Time</h3>
                    <p>HTML, CSS, Javascript</p>
                    <Button className="m-5"><a href="https://github.com/DSnod93/Cuisine-Time"></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image src={project2} width="350" height="320" />
                    <h3 className="mt-4">DishADay</h3>
                    <p>Javascript, CSS, Mysql2, Sequelize, bcrypt, Materialize, Express, Node</p>
                    <Button className="m-4"><a href="https://github.com/team-8food/food-blog"></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image src={project3} width="350" height="320" />
                    <h3 className="mt-4">The Food Chain</h3>
                    <p>MongoDB, Express, React, Node, JWT, Stripe, Materialize, GraphQL, bcrypt, Mongoose</p>
                    <Button className="m-4"><a href="https://github.com/team-8food/food-blog"></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image className="mt-5" src={work1} width="350" height="320" />
                    <h3 className="mt-4">Note Taker</h3>
                    <p>Node, Express, Javascript, HTML, CSS</p>
                    <Button className="m-4"><a href="https://github.com/DSnod93/notepad"></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image className="mt-5" src={work2} width="350" height="320" />
                    <h3 className="mt-4">Run-Buddy</h3>
                    <p>HTML, CSS</p>
                    <Button className="m-4"><a href="https://github.com/DSnod93/run-buddy"></a>Click Here</Button>
                </Col>
                <Col md={true}>
                    <Image className="mt-5" src={work3} width="350" height="320" />
                    <h3 className="mt-4">Work Day Scheduler</h3>
                    <p>HTML, CSS, Bootstrap, jQuery, Moment.js</p>
                    <Button className="m-4"><a href="https://github.com/DSnod93/work-day-scheduler"></a>Click Here</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;
