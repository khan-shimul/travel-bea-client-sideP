import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './PackageDetails.css';

const PackageDetails = () => {
    const [singlePack, setSinglePack] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${id}`)
            .then(res => res.json())
            .then(data => setSinglePack(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data.email, singlePack)
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
                            <input {...register("fullName", { required: true })} placeholder="Your Full Name" className="mb-2 p-2 border rounded-2" />
                            <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="mb-2 p-2 border rounded-2" />
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