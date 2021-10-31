import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './TravelBea.css';

const TravelBea = () => {
    return (
        <div className="py-5 my-4">
            <h2 className="text-center fw-bold mb-3">Why You Are Travel With <br /> TravelBea </h2>
            <div className="line d-flex mx-auto mb-4"></div>
            <div className="container">
                <Row xs={1} md={4} className="g-4 travel-icon">
                    <Col>
                        <Card className="h-100 p-3 bg-card1">
                            <Card.Body className="text-center">
                                <i className="fas fa-globe"></i>
                                <h2>1000+ Our worldwide guide</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 p-3 bg-card2">
                            <Card.Body className="text-center">
                                <i className="fas fa-handshake"></i>
                                <h2>100% trusted travel agency</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 p-3 bg-card3">
                            <Card.Body className="text-center">
                                <i className="fas fa-suitcase-rolling"></i>
                                <h2>5+ year of travel experience
                                </h2>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 p-3 bg-card4">
                            <Card.Body className="text-center">
                                <i className="far fa-smile-wink"></i>
                                <h2>95% of our traveller happy</h2>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TravelBea;