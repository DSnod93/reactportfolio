// create contact form
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!validateEmail(email)) {
            errors.email = 'Invalid email address';
            setEmail('');
            return;
        }
        if (!name) {
            errors.name = 'Please enter your name';
        }
        if (!message) {
            errors.message = 'Please enter your message';
        }
        if (Object.keys(errors).length) {
            return;
        }
        const data = {
            name: name,
            email: email,
            message: message
        };
        console.log(data);
    };
    return (
        <Container fluid>
            <div>
                <h2 className="text-center m-5 pb-3 pt-5" >Contact</h2>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-0 form-group" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="name" ></Form.Label>
                    <Form.Control type="name" placeholder="Enter your Name" required="" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-0 form-group" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="email" ></Form.Label>
                    <Form.Control type="email" placeholder="Enter a valid email address" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="form-group" controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor="message" ></Form.Label>
                    <Form.Control as="textarea" placeholder="Enter your message" rows={3} required="" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <Button size="sm" className="mt-2 mb-5" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default Contact;
