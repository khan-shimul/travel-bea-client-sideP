import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrders.css';

const ManageOrders = () => {
    const [bookedPackages, setBookedPackages] = useState([]);
    const [isApproved, setIsApproved] = useState(false);

    useEffect(() => {
        fetch('https://guarded-thicket-61427.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setBookedPackages(data))
    }, [isApproved])

    // handle delete from all booked packages
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete this package?');
        if (proceed) {
            fetch(`https://guarded-thicket-61427.herokuapp.com/booked/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Successfully delete the booking')
                        const remaining = bookedPackages.filter(bookedPack => bookedPack.unique_id !== id)
                        setBookedPackages(remaining)
                    }
                })
        }
    }

    // handle update
    const handleUpdate = id => {
        // find specific package
        const specific = bookedPackages.find(pck => pck.unique_id === id)
        specific.status = 'Approved'

        fetch(`https://guarded-thicket-61427.herokuapp.com/booked/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(specific)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Successfully Approved the Package')
                    setIsApproved(true)
                }
            })
    }

    return (
        <div>
            <div className="banner-my-booking d-flex justify-content-center align-items-center text-white text-center banner-my-booking text-center py-5">
                <h2 className="fw-bold fs-3">Manage All Orders</h2>
            </div>
            <div className="table-responsive-sm table-responsive table-responsive-md table-responsive-lg table-responsive-xl text-center my-3">
                {
                    bookedPackages.length && <Table striped bordered hover variant="info">
                        <thead >
                            <tr>
                                <th>Client</th>
                                <th>Place</th>
                                <th>Ticket Type</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Review</th>
                                <th>Trash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedPackages.map(bookedPackage => <tr key={bookedPackage.unique_id}>
                                    <td>{bookedPackage?.clientInfo?.fullName}</td>
                                    <td>{bookedPackage?.name}</td>
                                    <td>{bookedPackage?.clientInfo?.ticketType}</td>
                                    <td>{bookedPackage?.email}</td>
                                    <td>{bookedPackage?.status}</td>

                                    <td><button onClick={() => handleUpdate(bookedPackage?.unique_id)} className="btn-status">{bookedPackage.status === 'Approved' ? 'Done' : 'Confirm'}</button></td>

                                    <td><button onClick={() => handleDelete(bookedPackage.unique_id)} className="booking-btn">Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                }
            </div>
        </div>
    );
};

export default ManageOrders;