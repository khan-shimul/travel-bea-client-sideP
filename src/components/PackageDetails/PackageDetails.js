import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './PackageDetails.css';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const PackageDetails = () => {
    const { user } = useAuth()
    const [singlePack, setSinglePack] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://guarded-thicket-61427.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setSinglePack(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    // handle booked package
    const onSubmit = data => {
        const packaged = singlePack;
        packaged.email = user.email;
        packaged.clientInfo = data;
        packaged.status = 'Pending';
        delete packaged._id;
        // generate random unique id
        const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        const unique_id = randLetter + Date.now();
        packaged.unique_id = unique_id;

        axios.post('https://guarded-thicket-61427.herokuapp.com/booked', { packaged })
            .then(result => {
                if (result.data.insertedId) {
                    alert('Successfully booked')
                    reset();
                }
            })
    }


    return (
        <div>
            <div className="details-banner d-flex justify-content-center align-items-center text-white text-center">
                <div>
                    <h2 className="fw-bold">Tour Package Details</h2>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-8">
                        <Card>
                            <Card.Img variant="top" src={singlePack?.img} />
                            <Card.Body>
                                <Card.Title>{singlePack?.name}</Card.Title>
                                <Card.Text>
                                    {singlePack?.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="sub-form d-flex flex-column p-4">
                            <h2>Book This Package</h2>
                            <input defaultValue={singlePack?.name} readOnly {...register("packageName")} className="mb-2 p-2 border rounded-2" />
                            <input defaultValue={user.displayName} {...register("fullName", { required: true })} placeholder="Your Full Name" className="mb-2 p-2 border rounded-2" />
                            <input type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" className="mb-2 p-2 border rounded-2" />
                            <input type="number" {...register("phoneNumber", { required: true })} placeholder="Phone Number" className="mb-2 p-2 border rounded-2" />
                            <select {...register("ticketType")} className="mb-2 p-2 border rounded-2">
                                <option value="Bus">Travel with Bus</option>
                                <option value="Plane">Travel with Plane</option>
                                <option value="Train">Travel with Train</option>
                            </select>
                            <textarea  {...register("message")} placeholder="Message" className="mb-2 p-2 border rounded-2" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;