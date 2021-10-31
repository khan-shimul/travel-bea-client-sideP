import React from 'react';
import HotelBooking from '../../HotelBooking/HotelBooking';
import Banner from '../Banner/Banner';
import TourPackages from '../TourPackages/TourPackages/TourPackages';
import TravelBea from '../TravelBea/TravelBea';


const Home = () => {
    return (
        <div id="#home">
            <Banner />
            <TourPackages />
            <HotelBooking />
            <TravelBea />
        </div>
    );
};

export default Home;