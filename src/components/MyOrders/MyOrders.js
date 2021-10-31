import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth()
    const [bookedPack, setBookedPack] = useState([]);

    const myOrders = bookedPack.filter(pack => pack?.email === user?.email)
    // console.log(myOrders);

    useEffect(() => {
        fetch('https://guarded-thicket-61427.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setBookedPack(data))
    }, [])

    // handle delete
    const handleCancel = id => {
        const proceed = window.confirm('Are you sure want to cancel this package?');
        if (proceed) {
            fetch(`https://guarded-thicket-61427.herokuapp.com/booked/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Successfully cancel the booking')
                        const remaining = bookedPack.filter(bookingPack => bookingPack.unique_id !== id)
                        setBookedPack(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-white text-center banner-my-booking text-center py-5">
                <div>
                    <h2 className="fw-bold">Hello {user?.displayName}</h2>
                    {
                        myOrders.length > 0 && <h5>You have booked: {myOrders.length}</h5>
                    }
                    {
                        !myOrders.length && <h5>You dont have any booked!</h5>
                    }
                </div>
            </div>

            <div className="table-responsive-sm table-responsive table-responsive-md table-responsive-lg table-responsive-xl text-center">
                {
                    myOrders.length && <div>
                        <h2 className="text-center my-4 fw-bold fs-5">Your Booking Overview</h2>
                        <div className="line d-flex mx-auto"></div>
                        <Table striped bordered hover variant="light" className=" my-4">
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Ticket Type</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map(order => <tr key={order._id}>
                                        <td>{order?.name}</td>
                                        <td>{order?.clientInfo?.ticketType}</td>
                                        <td>${order?.price}</td>
                                        <td>{order?.status}</td>
                                        <td><button onClick={() => handleCancel(order.unique_id)} className="booking-btn">Cancel</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                }
            </div>

        </div>
    );
};

export default MyOrders;