import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://guarded-thicket-61427.herokuapp.com/packages', { data })
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully added')
                    reset();
                }

            })
    }

    return (
        <div className="container my-5">
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center mx-auto w-50">
                    <h2>Please Add Package</h2>
                    <input {...register("packageName", { required: true })} placeholder="Package Name" className="mb-2 p-1" />
                    {errors.packageName && <span className="mb-1">This field is required</span>}
                    <input type="number" {...register("price", { required: true })} placeholder="Price" className="mb-2 p-1" />
                    <input {...register("location", { required: true })} placeholder="Location" className="p-1 mb-2" />
                    <input {...register("img", { required: true })} placeholder="Image Url" className="p-1" />
                    <input type="submit" className="w-25 text-center mt-2" />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;