import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Logo/logo1.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        color: "#FF7F47"
    }

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top logo-bg"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto nav-menu">
                            <Nav.Link as={HashLink} to="/home#home"
                            >Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#tour-package"
                                activeStyle={activeStyle}
                            >Tour Package</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#feature"
                                activeStyle={activeStyle}
                            >Feature</Nav.Link>
                        </Nav>

                        {
                            user && <>
                                <NavLink to="/my-orders" className="text-decoration-none simple-fw"
                                    activeClassName="selected"
                                    activeStyle={activeStyle}
                                >My Booking</NavLink>
                                <NavDropdown title="Admin" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/manage-orders"
                                        activeClassName="selected"
                                        activeStyle={activeStyle}
                                    >Manage Booking</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/add-package"
                                        activeClassName="selected"
                                        activeStyle={activeStyle}
                                    >Add Package</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }

                        {
                            user?.photoURL && <div>
                                <img className="user-dp" src={user?.photoURL} alt="" />
                            </div>
                        }

                        {
                            !user ? <Nav.Link as={NavLink} to="/login" className="text-dark text-decoration-none fw-bold login">Login</Nav.Link> :
                                <button onClick={logOut} className="bg-transparent border-0" title="Sign Out"><i className="fas fa-sign-in-alt logout"></i> </button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;