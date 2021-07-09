import React, { Component, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    return (
        <Container fluid>
            <div>
                <h2 className="text-center m-5 pb-3 pt-5" >Contact</h2>
            </div>
            <Form>
                <Form.Group className="mb-0 form-group" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="name" ></Form.Label>
                    <Form.Control type="name" placeholder="Enter your Name"  required="" />
                </Form.Group>
                <Form.Group className="mb-0 form-group" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="email" ></Form.Label>
                    <Form.Control type="email" placeholder="Enter a valid email address" required="" />
                </Form.Group>
                <Form.Group className="form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor="message" ></Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your message" rows={3}  required="" />
                    <Button size="sm" className="mt-2 mb-5" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Contact;
