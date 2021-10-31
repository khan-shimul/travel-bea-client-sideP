import React from 'react';
import hotel from '../../images/hotell.jpg';
import './HotelBooking.css';

const HotelBooking = () => {
    return (
        <div id="feature" className="overflow-hidden">
            <div className="row d-flex justify-content-center align-items-center bg-secondary bg-opacity-10">
                <div className="col-md-6">
                    <img className="img-hotel" src={hotel} alt="" />
                </div>
                <div className="col-md-6 p-5">
                    <h2 className="fw-bold">Hotel Booking</h2>
                    <div className="line"></div>
                    <p>You can hotel book with us very soon! And you'll get Family-friendly room features and amenities: The hotel should be well equipped with all the basic and some add-on amenities like larger rooms, separate bathroom with pocket door, laundry service, room wifi, parking and take away service.</p>
                    <button className="btn-explore">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default HotelBooking;