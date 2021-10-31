import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import logo from '../../../images/Logo/logo1.png';
import './Footer.css';
import accept from '../../../images/accept.png';

const Footer = () => {
    return (
        <footer>
            <div className="text-white bg-footer py-2">
                <div className="row footer p-5 container mx-auto">
                    <div className="col-12 col-md-4">
                        <div className="mb-2">
                            <img className="logo me-2" src={logo} alt="" />
                            <span className="fw-bold fs-3">Travel <span className="primary-text">Bea</span></span>
                        </div>
                        <p className="short-footer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
                        <img src={accept} className="img-fluid pe-5" alt="" />

                    </div>
                    <div className="col-md-4">
                        <div className="contact">
                            <h2 className="fw-bold fs-3">Contact</h2>
                            <div className="home d-flex">
                                <div className="me-2">
                                    <i className="fas fa-home primary-text"></i>
                                </div>
                                <div>
                                    <p>New street, New York, UK</p>
                                </div>
                            </div>
                            <div className="phone d-flex">
                                <div className="me-2">
                                    <i className="fas fa-phone-alt primary-text"></i>
                                </div>
                                <div>
                                    <p>(0008) 159-456-999</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="me-2">
                                    <i className="fas fa-envelope primary-text"></i>
                                </div>
                                <div>
                                    <p>travelbea@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className="fs-3 fw-bold">Subscribe</h3>
                        <InputGroup className="mb-3 w-75">
                            <FormControl className="py-2"
                                placeholder="Your email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <small className="text-secondary">Get e-mail updates about our latest products and special offers.</small>
                        <div className="row social">
                            <h2 className="fs-4 fw-bold mt-2">Follow Us</h2>
                            <div className="col-1 col-md-1">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                            </div>
                            <div className="col-1 col-md-1">
                                <a href="#"> <i className="fab fa-instagram"></i></a>
                            </div>
                            <div className="col-1 col-md-1">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                            <div className="col-1 col-md-1">
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>

                        </div>
                    </div>

                </div>
                <hr className="w-75 d-flex mx-auto" />
                <p className="text-center"><small>All reserved <span>&copy;</span> Copyright 2022 - 2024 </small></p>
            </div>
        </footer>
    );
};

export default Footer;