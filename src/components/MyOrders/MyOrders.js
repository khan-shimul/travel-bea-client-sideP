import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const [bookedPack, setBookedPack] = useState([]);

    const myOrders = bookedPack.filter(pack => pack?.email === user?.email)
    console.log(myOrders);

    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => setBookedPack(data))
    }, [])

    // handle delete
    const handleCancel = id => {
        fetch(`http://localhost:5000/booked/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div>
            <div className="text-center my-5">
                <h2>Hello {user?.displayName}</h2>
                <h5>You have booked: {myOrders.length}</h5>
            </div>

            <div className="table-responsive-sm table-responsive table-responsive-md table-responsive-lg table-responsive-xl">
                {
                    myOrders.length && <Table striped bordered hover variant="light" className="container">
                        <thead >
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
                                    <td><button onClick={() => handleCancel(order._id)}>Cancel</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                }
            </div>

        </div>
    );
};

export default MyOrders;