import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner2 from '../../../images/Banner/2.jpg';
import banner4 from '../../../images/Banner/4.jpg';
import banner5 from '../../../images/Banner/5.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel className="banner">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold fs-1">Amazing Tour In Bangkok</h3>
                        <p className="fs-6">6days, 7night</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold fs-1">Amazing Tour In India</h3>
                        <p className="fs-6">6days, 7night</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fw-bold fs-1">Amazing Tour In Thiland</h3>
                        <p className="fs-6">6days, 7night</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;