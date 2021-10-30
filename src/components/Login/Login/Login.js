import React from 'react';
import login2 from '../../../images/Login/login2.png';
import { useForm } from "react-hook-form";
import './Login.css';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, setUser, signInUsingGoogle, error, setError, setIsLoading } = useAuth();
    console.log(user)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // handle google sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setError('')

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center my-5">
                <div className="col-md-6">
                    <img src={login2} alt="" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column login-form">
                        <h2>Please Login</h2>
                        <input placeholder="Email" {...register("email", { required: true })} className="mb-2 p-1" />
                        <input type="password" {...register("password", { required: true })} className="mb-2 p-1" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" value="Login" />
                        <span className="text-center mt-3">Or Login With</span>
                        <Button variant="primary" onClick={handleGoogleSignIn}>Google</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;