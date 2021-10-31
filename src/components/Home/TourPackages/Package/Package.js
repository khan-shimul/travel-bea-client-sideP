import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Package.css';

const Package = ({ pack }) => {
    const { _id, name, description, duration, img, language, location, price, reviews, rating } = pack;

    const history = useHistory();

    // handle details page
    const handleDetails = id => {
        history.push(`/package-details/${id}`)
    }

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
                    <span>{location}</span>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-6">
                            <Rating className="icons"
                                initialRating={rating}
                                emptySymbol="far fa-star rating-star"
                                fullSymbol="fas fa-star fs-6 rating-star"
                                readonly
                            />
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                    <Card.Text>
                        {description?.slice(0, 50)}...
                    </Card.Text>
                    <Button variant="warning" onClick={() => handleDetails(_id)}>Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;