import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const [bookedPack, setBookedPack] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h2>Hello {user?.displayName}</h2>
        </div>
    );
};

export default MyOrders;