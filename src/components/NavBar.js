import React from 'react';
import { Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap'

const AppBar = (props) => {

    let showNavData = (
        <Form inline onSubmit={props.click} >
            <FormControl type="email" placeholder="Enter email" className="mr-sm-2" onChange={(e) => props.change(e, 'email')} />
            <FormControl type="password" placeholder="Enter password" className="mr-sm-2" onChange={(e) => props.change(e, 'password')} />
            <Button type="submit" variant="outline-light">Login</Button>
        </Form>
    )

    if (props.type !== 'registration') showNavData = <Button onClick={props.click} type="submit" variant="outline-light">Logout</Button>

    return (
        < Navbar bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand href="#home">Blog Application</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">My Blogs</Nav.Link>
            <Nav.Link href="#features">My Profile</Nav.Link>
        </Nav>
        {showNavData}
        </Navbar>
    )
}

export default AppBar