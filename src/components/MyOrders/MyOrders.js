import React from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    console.log(user)

    return (
        <div>
            <h2>Hello {user?.displayName}</h2>
        </div>
    );
};

export default MyOrders;