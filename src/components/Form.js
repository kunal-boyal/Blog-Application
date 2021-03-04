import React from 'react';
import { Form, Button } from 'react-bootstrap'

const RegistrationForm = (props) => (
    <Form onSubmit={props.submit}>
        <Form.Group >
            <Form.Label>Name</Form.Label>
            <Form.Control type="type" placeholder="Enter Name" onChange={(e) => props.change(e, 'name')} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => props.change(e, 'email')} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => props.change(e, 'password')} />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
            Submit
        </Button>
    </Form>
)

export default RegistrationForm