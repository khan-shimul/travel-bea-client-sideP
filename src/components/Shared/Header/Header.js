import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/Logo/logo 1.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        // color: "red"
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top logo-bg"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end tex-white">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home"
                                activeStyle={activeStyle}
                                className="text-white"
                            >Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#products"
                                activeStyle={activeStyle}
                                className="text-white"
                            >Products</Nav.Link>
                            <Nav.Link as={NavLink} to="/about"
                                activeStyle={activeStyle}
                                className="text-white"
                            >About</Nav.Link>
                            <Nav.Link as={NavLink} to="/personal-care"
                                activeStyle={activeStyle}
                                className="text-white"
                            >Personal Care</Nav.Link>
                        </Nav>

                        <Nav.Link as={NavLink} to="/login" className="text-decoration-none text-white "><span><i className="fas fa-sign-in-alt text-primary login-icon"></i></span> Login</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;