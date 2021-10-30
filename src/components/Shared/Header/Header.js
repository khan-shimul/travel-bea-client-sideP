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
                            <Nav.Link as={HashLink} to="/home#tour-package"
                                activeStyle={activeStyle}
                                className="text-white"
                            >Tour Package</Nav.Link>
                            <Nav.Link as={NavLink} to="/home#about"
                                activeStyle={activeStyle}
                                className="text-white"
                            >About</Nav.Link>
                        </Nav>

                        {
                            user && <>
                                <NavLink to="/my-orders">My Orders</NavLink>
                                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/manage-orders">Manage Orders</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/add-package"
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
                            !user ? <Nav.Link as={NavLink} to="/login" className="text-decoration-none text-white "><span><i className="fas fa-sign-in-alt text-primary login-icon"></i></span> Login</Nav.Link> :
                                <button onClick={logOut}>Logout</button>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;