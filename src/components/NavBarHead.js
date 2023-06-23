import React from 'react'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavBarHead = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navbar-effect mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">ReactJS Tutorial</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Link to='/'><Nav.Link href="/">Home</Nav.Link></Link>
                            <Link to='/about'><Nav.Link href="/about">About</Nav.Link></Link>
                            <Link to='/add-data'><Nav.Link href="/add-data"> add Data</Nav.Link></Link>
                            <Link to='/view-data'><Nav.Link href="/view-data">View Data</Nav.Link></Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarHead
