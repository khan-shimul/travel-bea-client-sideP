import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Package.css';

const Package = ({ pack }) => {
    const { name, description, duration, img, language, location, price, reviews, rating } = pack;
    return (
        <Col>
            <Card className="h-100 place">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-6">
                            <p className="fs-6"><span className="fw-bold fs-5">${price}</span>/Per Person</p>
                        </div>
                        <div className="col-md-6">
                            <p>{duration}</p>
                        </div>
                    </div>
                    <Card.Title className="fw-bold fs-4">{name}</Card.Title>
                    <p>{location}</p>
                    <Card.Text>
                        {description.slice(0, 50)}...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;