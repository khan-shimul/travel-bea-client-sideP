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
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center mx-auto w-50 sub-form p-4">
                    <h2 className="fw-bold fs-4 mb-3">Please Add Package</h2>
                    <input {...register("packageName", { required: true })} placeholder="Package Name" className="mb-2 p-3 border rounded-2" />
                    {errors.packageName && <span className="mb-1">This field is required</span>}
                    <input type="number" {...register("price", { required: true })} placeholder="Price" className="mb-2 p-3 border rounded-2" />
                    <input {...register("rating", { required: true })} placeholder="Rating" className="mb-2 p-3 border rounded-2" />
                    <input {...register("location", { required: true })} placeholder="Location" className="mb-2 p-3 border rounded-2" />
                    <input {...register("img", { required: true })} placeholder="Image Url" className="mb-2 p-3 border rounded-2" />
                    <textarea rows="3"  {...register("description")} placeholder="Description" className="mb-2 p-3 border rounded-2" />
                    <input type="submit" className="w-25 text-center mt-2 btn-login" />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;