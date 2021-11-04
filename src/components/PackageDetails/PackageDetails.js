import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './PackageDetails.css';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Rating from 'react-rating';

const PackageDetails = () => {
    const { user } = useAuth()
    const [singlePack, setSinglePack] = useState({});
    const { id } = useParams();
    let history = useHistory()

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
                    history.push('/my-orders')
                }
            })
    }

    // back to home
    const handleBackHome = () => {
        history.push("/home#tour-package")
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
                    <div className="col-md-8 my-3">
                        <Card className="single-pack">
                            <Card.Img variant="top" src={singlePack?.img} />
                            <Card.Body className="p-4">
                                <Card.Title className="primary-text fw-bold fs-3">{singlePack?.name}</Card.Title>
                                <Card.Text className="text-secondary">
                                    <i className="fas fa-map-marker-alt"></i> {singlePack?.location}
                                </Card.Text>
                                <Card.Text>
                                    <span className="fw-bold fs-6">${singlePack?.price}</span> <span>/Per Person</span>
                                </Card.Text>
                                <Card.Text>
                                    <p className="fw-bold fs-5">Overview <span><Rating className="icons ms-2"
                                        initialRating={singlePack?.rating}
                                        emptySymbol="far fa-star rating-star"
                                        fullSymbol="fas fa-star fs-6 rating-star"
                                        readonly
                                    /></span></p>
                                    <div className="line"></div>
                                    {singlePack?.description}
                                </Card.Text>
                                <Button onClick={handleBackHome} variant="danger">Back to All Pack</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* booking form */}
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="sub-form d-flex flex-column p-4">
                            <h4 className="fw-bold fs-5 mb-3">Book This Package</h4>
                            <input defaultValue={singlePack?.name} {...register("packageName")} className="mb-2 p-3 border rounded-2" />
                            <input defaultValue={user.displayName} {...register("fullName", { required: true })} placeholder="Your Full Name" className="mb-2 p-3 border rounded-2" />
                            <input type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" className="mb-2 p-3 border rounded-2" />
                            <input type="number" {...register("phoneNumber", { required: true })} placeholder="Phone Number" className="mb-2 p-2 border rounded-2" />
                            <select {...register("ticketType")} className="mb-2 p-3 border rounded-2">
                                <option value="Bus">Travel with Bus</option>
                                <option value="Plane">Travel with Plane</option>
                                <option value="Train">Travel with Train</option>
                            </select>
                            <textarea rows="3"  {...register("message")} placeholder="Message" className="mb-2 p-3 border rounded-2" />
                            <input type="submit" className="btn-submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;