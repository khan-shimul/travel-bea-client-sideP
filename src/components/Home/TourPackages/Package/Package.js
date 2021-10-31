import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './Package.css';

const Package = ({ pack }) => {
    const { _id, name, img, location, price, rating } = pack;

    const history = useHistory();

    // handle details page
    const handleDetails = id => {
        history.push(`/package-details/${id}`)
    }

    return (
        <Col>
            <Card data-aos="zoom-in" className="h-100 place package">
                <Card.Img variant="top" src={img} />
                <Card.Body>

                    <h2 className="fw-bold fs-5">${price}<span className="fs-6 fw-normal">/Per Person</span> </h2>
                    {/* <p>{duration}</p> */}
                    <Card.Title className="fw-bold fs-4">{name}</Card.Title>
                    <p className="location">{location}</p>
                    <div className="mb-2">
                        <Rating className="icons"
                            initialRating={rating}
                            emptySymbol="far fa-star rating-star"
                            fullSymbol="fas fa-star fs-6 rating-star"
                            readonly
                        />
                    </div>
                    <button variant="warning" onClick={() => handleDetails(_id)}
                        className="btn-book-now"
                    >Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;